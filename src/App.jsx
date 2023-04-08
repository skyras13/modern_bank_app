import styles from './styles';

import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingx} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          navbar
        </div>
      </div>

      {/* Hero Section */}
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Busines 
          Billing 
          CardDeal
          Testimonials 
          Clients 
          CTA 
          Footer
        </div>
      </div>

    </div>
  );

export default App