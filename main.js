const serverUrl = "https://hlceppldpjau.usemoralis.com:2053/server";
const appId = "PdVMOkLASVvqCnai1v5mKjhjUHBFYKTNG5tFC0cF";
Moralis.start({ serverUrl, appId });
const web3auth = window.Web3auth;


async function login() {
    const user = await Moralis.authenticate({
        provider: "web3Auth",
        clientId: "BNGh-qM6l_P1FxU1TQXZKrpdbgEaCGgTKlxCXr5f_6khL1jfIN56rxtVUx6G1hR13EmoBDPL2wzDDC6IDlxdE5s",
    });
}

async function info() {
  const user = await web3auth.getUserInfo(email);
  console.log(user);
}



document.getElementById('btn-login')
.addEventListener('click', () => {
  login();
})

document.getElementById('btn-info')
.addEventListener('click', () => {
  info();
})

async function getUserInfo() {
  const log= await web3auth.getUserInfo(email);
  console.log(log);
}

