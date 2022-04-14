import Eth_Blue from '../images/Eth_Blue.png'

const Navbar = ({ web3Handler, account, explorerURL }) => {
    return (
        <nav className="navbar fixed-top mx-3">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
                href="https://tj-everett.github.io/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Eth_Blue} width={45} height={45} className="App-ETH" alt="Eth_Blue" />
                My Portfolio 
            </a>

            {account ? (
                <a
                    href={`${explorerURL}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button nav-button btn-sm mx-4">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button nav-button btn-sm mx-4">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;