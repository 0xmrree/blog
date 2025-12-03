import { Link } from 'react-router-dom'
import '../Article.css'
import ImageRow from '../ImageRow'

function EthereumSimulator() {
  const maxSizeForRegularImages = 800

  return (
    <div className="article-view">
      <div className="article-container">
        <Link to="/" className="back-btn">
          ← Back to Articles
        </Link>
        
        <article className="article-full">
          <h1>Ethereum Simulator</h1>
          <div className="article-meta">
            <p className="date">12/02/2025</p>
            <span className="meta-divider">•</span>
            <p className="author">
              Authored by <a href="https://mrree.eth.limo" target="_blank" rel="noopener noreferrer" className="author-link">mrree.eth (Joe Patchen)</a>
            </p>
          </div>

          <div className="article-intro">
            <p>
              In an effort to teach myself how Ethereum's proof of stake consensus actually works, I created my own toy version of Ethereum that runs in your browser and executes the core proof of stake consensus logic combining attestations, Latest Message Driven GHOST fork choice rule, Casper the Friendly Finality Gadget to determine finalized checkpoints, and the RANDAO selection algorithm powered by the "fresh/unpredictable" randomness provided by the validators signing the current epochs with their private keys. In addition, the Ethereum nodes basic account based transactions as well as a simplified smart contract scheme I made called the Ethereum painting machine, which I discuss in more detail later. In addition, you can try out the simulator in your browser yourself by visiting the <a href="https://ethereum-simulator.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-link">live demo</a> and you can see its <a href="https://github.com/0xmrree/ethereum-simulator" target="_blank" rel="noopener noreferrer" className="inline-link">source code</a>.
            </p>
          </div>

          <ImageRow 
            images={{ 
              src: '/eth-sim/main.png', 
              alt: 'Ethereum simulator running four nodes',
              aspectRatio: 16/9 
            }}
            caption="Below is the simulator running all four nodes, where the yellow node has increased network latency to demonstrate how PoS handles forks"
          />

          <p>
            Basically, the simulator starts four nodes in your browser that communicate with each other in a mesh network via attestations, LMD GHOST head broadcast, proposer broadcasts, and block tree sync messages. There is no shared information between the nodes outside of me statically setting the validator sets when the nodes start up. Some other big simplifications I made were not including slashing transactions, making the issuance of ETH for proposers static not dependent on the root of the validator set, not accounting for gas, and further no gas fee market stuff. 
          </p>
          
          <p>
            Once running, the simulator lets you see each of the chains growing together along with the Casper FFG and LMD GHOST head info. A fork is created in the picture above by increasing the network latency at block 10 of the yellow node, which will be resolved after the first sync from the others given their branch will have the majority of attestations. Also notice that the Casper FFG final checkpoint for yellow stops moving forward given it won't have enough attestation target checkpoint votes to update the justified/finalized checkpoints on its fork. Once it syncs, it will see the latest attestations, switch to the other fork via LMD GHOST algorithm, and then from the attestations in the chain realize the checkpoints on the new chain have the 2/3 votes needed and will move the Casper pointers forward.
          </p>

          <h2>Block Tree</h2>
          <p>
          Probably my favorite part of the simulator is how you can see the block tree of each node, which lets you visualize how the network responds to different scenarios. As you can see, the tree gets decorated with the amount of attested ETH such that the GHOST algorithm can find the head of the chain.
          </p>

          <ImageRow 
            maxSize={maxSizeForRegularImages}
            images={{ 
            src: '/eth-sim/tree1.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }} />

          <ImageRow 
          maxSize={maxSizeForRegularImages}
          images={{ 
            src: '/eth-sim/tree2.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }}
          caption="Below shows how we break ties based on hashes which differs from the actual GHOST algorithm"
          />

          <p>
            If we increase the latency of one node, we will see a large fork created that will eventually be abandoned in favor of the other chain/subtree with the majority of attestations. The new chain has no proposed blocks from the node that experienced increased latency. From my understanding, this is why it's tricky to decrease the slot time if you truly want nodes all across the world with varying levels of internet connection to be able to participate in staking without missing their scheduled proposer slots.
          </p>

          <ImageRow 
          maxSize={maxSizeForRegularImages}images={{ 
            src: '/eth-sim/tree3.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }} />

          <h2>Beacon State (CL)</h2>
          <p>
          The beacon state is separate global state from the execution layer's world state, which holds the account states and more. For the beacon state, we first have the basic info such as current epoch, slot, validator set, along with our Casper info such as the current epoch target votes for the next checkpoint.
          </p>

          <ImageRow
          maxSize={maxSizeForRegularImages}
          images={{ 
            src: '/eth-sim/beacon1.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }} />

          <p>
            Next in our beacon state, we have the RANDAO mixes and the proposer scheduler. I only consider the mixes as part of the beacon state, and the schedules I compute lazily when needed, which can be a tad confusing for the visualization. Of course, to compute those mixes, XOR the RANDAO reveal from the chosen proposer (based on the last mix) into the current mix. Using the proposer's BLS signature of the epoch to add unpredictable randomness into the mix is super clever!
          </p>

          <ImageRow
          maxSize={maxSizeForRegularImages} images={{ 
            src: '/eth-sim/beacon2.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }} />

          <p>
            And lastly, we have our attestations, which are part of the beacon pool, not really the beacon state, but they're in here anyway.
          </p>

          <ImageRow
          maxSize={maxSizeForRegularImages} images={{ 
            src: '/eth-sim/beacon3.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }} />

          <h2>World State (EL)</h2>
          <p>
          For the world state of our execution layer, we have the basics, which are the account states along with the receipts. In addition, you can view the state of the smart contracts.
          </p>

          <ImageRow
           images={[{ 
            src: '/eth-sim/worldstate.png', 
            alt: 'a',
            aspectRatio: 16/9 
          },
          { 
            src: '/eth-sim/worldstate2.png', 
            alt: 'a',
            aspectRatio: 16/9 
          }]} />

          <h2>EVM and Smart Contracts</h2>
          <p>
            For the EVM, I didn't want to get bogged down making a virtual machine, so I made an EPM (Ethereum Painting Machine), which basically supports one type of smart contract where you create the contract with a specific image to paint, and all of the accounts in the network fight to paint the picture until it's complete. The amount you can paint is proportional to the ETH in transactions sent to the smart contract. Then, once the image is finished painting, the smart contract will reward all of the ETH sent to the contract to the account that painted the most. Funny enough, the algorithm that "randomly" chooses which pixels to paint must have some properties that RANDAO has too. The simulator just has one smart contract created during the genesis block.
          </p>

          <ImageRow
          
          images={[
            { 
              src: '/eth-sim/epm1.png', 
              aspectRatio: 16/9 
            },
            { 
              src: '/eth-sim/epm2.png', 
              aspectRatio: 16/9 
            },
            { 
              src: '/eth-sim/epm3.png', 
              aspectRatio: 16/9 
            },
          ]} />

          <h2>Blocks</h2>
          <p>
The block setup is pretty simple given we have a single chain for both the beacon state's CL and world state's EL. Each block contains the transactions for the EL, attestations for the CL, and other stuff like the RANDAO reveal. Of course, the attestations are really only used for the Casper FFG stuff since our LMD GHOST logic is updated when we receive attestations in our beacon pool, not when we process them from the blocks.
          </p>

          <ImageRow
           images={[
            { 
              src: '/eth-sim/block1.png', 
              aspectRatio: 16/9 
            },
            { 
              src: '/eth-sim/block2.png', 
              aspectRatio: 16/9 
            },
            { 
              src: '/eth-sim/block3.png', 
              aspectRatio: 16/9 
            },
          ]} />

        </article>
      </div>
      <footer className="footer">Created with ❤️ by mrree.eth</footer>
    </div>
  )
}

export default EthereumSimulator
