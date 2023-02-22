import Link from 'next/link'
import styles from '@/styles/header.module.scss'

export default function Header() {
    return (
       <header className={styles.header}>
           <div className={styles.logo}>
               <Link href='/'>
                   <p>Abraham</p>
               </Link>
           </div>
           <nav>
               <ul>
                   <li>
                       <Link href='/events'>
                       <p>Log In</p>
                       </Link>
                   </li>
               </ul>
           </nav>
       </header>
    )
}
