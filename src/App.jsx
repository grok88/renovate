import smartlyLogo from './assets/smartly.svg'
import lock from './assets/lock.svg'
import fast from './assets/fast.png'
import fair from './assets/fair.png'
import best from './assets/best.png'
import right from './assets/right.svg'
import './App.css'

function App() {
    return (
        <>
            <div className="page">
                <main className="main">
                    <div className="container">
                        <header className="header">
                            <img src={smartlyLogo} alt="Renovate logo" className="lock-icon"/>
                            <h1 className="title">
                                You were Pre-qualified for a direct-to-consumer loan
                            </h1>
                        </header>
                        <div className="offers-section">
                            <div className="offers-header">
                                <h2 className="offers-title">Select an offer below</h2>
                                <div className="secured-badge">
                                    <img src={lock} alt="Lock icon"/>
                                    <span>Personal Loan</span>
                                </div>
                            </div>
                            <div className="offers-block">
                                <div className="offer-card-container">
                                    <div className="offer-card-title">Fast Lender</div>
                                    <div className="offer-card">
                                        <div className="prequalified-badge">Pre-qualified</div>
                                        <div className="offer-card-inner">
                                            <div className="offer-card-header">
                                                <div className="offer-card-header-block">
                                                    <span className="offer-amount">$15,000</span>
                                                    <span className="offer-description">Offer Amount</span>
                                                </div>
                                                <div className="offer-card-header-block">
                                                    <div className="offer-card-header-logo">
                                                        <img src={fast} alt="Fast logo"/>
                                                    </div>
                                                    <div className="offer-card-header-disclamer">
                                                        Disclamer & more info
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="offer-body">
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">10.99%</div>
                                                    <div className="offer-body-description">APR</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">7 years</div>
                                                    <div className="offer-body-description">Term</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">$7500</div>
                                                    <div className="offer-body-description">Monthly Payment</div>
                                                </div>
                                                <button className="continue-btn">Continue
                                                    <img src={right} alt="Fast logo"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer-card-container">
                                    <div className="offer-card-title">Fair Lender</div>
                                    <div className="offer-card">
                                        <div className="prequalified-badge">Pre-qualified</div>
                                        <div className="offer-card-inner">
                                            <div className="offer-card-header">
                                                <div className="offer-card-header-block">
                                                    <span className="offer-amount">$15,000</span>
                                                    <span className="offer-description">Offer Amount</span>
                                                </div>
                                                <div className="offer-card-header-block">
                                                    <div className="offer-card-header-logo">
                                                        <img src={fair} alt="Fast logo"/>
                                                    </div>
                                                    <div className="offer-card-header-disclamer">
                                                        Disclamer & more info
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="offer-body">
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">10.99%</div>
                                                    <div className="offer-body-description">APR</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">7 years</div>
                                                    <div className="offer-body-description">Term</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">$7500</div>
                                                    <div className="offer-body-description">Monthly Payment</div>
                                                </div>
                                                <button className="continue-btn">Continue
                                                    <img src={right} alt="Fast logo"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer-card-container">
                                    <div className="offer-card-title">Best Lender</div>
                                    <div className="offer-card">
                                        <div className="prequalified-badge">Pre-qualified</div>
                                        <div className="offer-card-inner">
                                            <div className="offer-card-header">
                                                <div className="offer-card-header-block">
                                                    <span className="offer-amount">$15,000</span>
                                                    <span className="offer-description">Offer Amount</span>
                                                </div>
                                                <div className="offer-card-header-block">
                                                    <div className="offer-card-header-logo">
                                                        <img src={best} alt="Fast logo"/>
                                                    </div>
                                                    <div className="offer-card-header-disclamer">
                                                        Disclamer & more info
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="offer-body">
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">10.99%</div>
                                                    <div className="offer-body-description">APR</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">7 years</div>
                                                    <div className="offer-body-description">Term</div>
                                                </div>
                                                <div className="offer-body-block">
                                                    <div className="offer-body-title">$7500</div>
                                                    <div className="offer-body-description">Monthly Payment</div>
                                                </div>
                                                <button className="continue-btn">Continue
                                                    <img src={right} alt="Fast logo"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="disclosures">
                            <a href="#" className="disclosures-link">
                                Important Disclosures
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
