import React, { useState } from 'react';
import { menuData } from './data/menu.js';

function App() {
  const [lang, setLang] = useState('zh'); // 'en' or 'zh'

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  const t = (keyEn, keyZh) => lang === 'en' ? keyEn : keyZh;

  return (
    <div className="app">
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div className="container flex justify-between align-center">
          <div style={styles.logoContainer} className="flex align-center">
            <h1 style={styles.brandName}>{t('New Sun B.B.Q', '新日燒臘')}</h1>
          </div>
          <div className="flex align-center">
            <button className="btn" onClick={toggleLang} style={styles.langBtn}>
              {lang === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div className="container text-center">
          <h2 style={styles.heroTitle}>{t('Authentic Chinese B.B.Q', '正宗港式燒臘')}</h2>
          <p style={styles.heroSubtitle}>{t('Freshly roasted daily for the best taste.', '每日明爐燒烤，保證新鮮美味。')}</p>
        </div>
      </header>

      {/* Main Menu Section */}
      <main className="container" style={styles.main}>
        <h3 className="text-center" style={styles.sectionTitle}>{t('Our Menu', '價目表')}</h3>
        
        <div style={styles.menuGrid}>
          {Object.values(menuData).map((category, idx) => (
            <div key={idx} style={styles.categoryCard} className="auth-border hover-scale">
              <h4 style={styles.categoryTitle}>{t(category.en, category.zh)}</h4>
              <ul style={styles.itemList}>
                {category.items.map(item => (
                  <li key={item.id} style={styles.itemRow} className="flex justify-between">
                    <div>
                      <div style={styles.itemName}>
                        {t(item.enName, item.zhName)}
                        {item.special && <span style={styles.specialBadge}>{t('Special!', '酬賓特價')}</span>}
                      </div>
                    </div>
                    <div style={styles.itemPrice}>
                      {item.price}<span style={styles.unit}>{item.unit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container text-center">
          <h3 style={styles.footerBrand}>New Sun B.B.Q 新日燒臘</h3>
          <p style={styles.footerText}>
            📞 416-293-7878 <br/>
            {t('Open 6 days a week', '6 天營業')}
          </p>
          <p style={styles.footerNotice}>
            {t('* Tax Not Included. Rice & Noodle Same Price.', '* 另稅. 飯粉同價')}
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#b71c1c',
    padding: '10px 0',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logoContainer: {
    gap: '15px'
  },
  logo: {
    height: '50px',
    borderRadius: '4px',
    border: '2px solid #fbc02d',
    objectFit: 'cover'
  },
  brandName: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#fbc02d',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  langBtn: {
    backgroundColor: '#fbc02d',
    border: '1px solid #ffb300',
    color: '#b71c1c',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  hero: {
    backgroundColor: '#d32f2f',
    backgroundImage: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
    color: '#fbc02d',
    padding: '60px 20px',
    borderBottom: '4px solid #fbc02d'
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0 0 10px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: 'white',
    margin: 0
  },
  main: {
    padding: '40px 20px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#b71c1c',
    marginBottom: '30px',
    borderBottom: '3px solid #fbc02d',
    display: 'inline-block',
    paddingBottom: '10px'
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px'
  },
  categoryCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    borderTop: '6px solid #d32f2f'
  },
  categoryTitle: {
    color: '#b71c1c',
    fontSize: '1.5rem',
    margin: '0 0 20px 0',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee'
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  itemRow: {
    padding: '12px 0',
    borderBottom: '1px dashed #e0e0e0',
    alignItems: 'flex-start'
  },
  itemName: {
    fontWeight: '600',
    fontSize: '1.1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  specialBadge: {
    backgroundColor: '#fbc02d',
    color: '#b71c1c',
    fontSize: '0.75rem',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold',
    display: 'inline-block',
    width: 'fit-content'
  },
  itemPrice: {
    fontWeight: '800',
    color: '#d32f2f',
    fontSize: '1.1rem',
    textAlign: 'right'
  },
  unit: {
    fontSize: '0.8rem',
    color: '#757575',
    fontWeight: '400',
    display: 'block'
  },
  footer: {
    backgroundColor: '#212121',
    color: 'white',
    padding: '40px 20px',
    marginTop: '40px',
    borderTop: '4px solid #fbc02d'
  },
  footerBrand: {
    color: '#fbc02d',
    margin: '0 0 10px 0'
  },
  footerText: {
    fontSize: '1.1rem',
    lineHeight: '1.8'
  },
  footerNotice: {
    color: '#9e9e9e',
    fontSize: '0.9rem',
    marginTop: '20px'
  }
};

export default App;
