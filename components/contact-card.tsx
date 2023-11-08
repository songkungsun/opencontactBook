import { Web3Button } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'
import { CONTRACT_ADDRESS } from '../const/addresses'

type Props = {
  index: number
  name: string
  wallet: string
}

export default function ContactCard(props: Props) {
  return (
    <div className={styles.contactCardContainer}>
      <div className={styles.contactCardInfo}>
        <h2>{props.name}</h2>
        <p> {props.wallet}</p>
      </div>
      <Web3Button
        className={styles.removeContactButton}
        contractAddress={CONTRACT_ADDRESS}
        action={(contract) => contract.call('removeContact', [props.index])}
      >
        X
      </Web3Button>
    </div>
  )
}