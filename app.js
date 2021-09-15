if(screen.width <= 600){
	window.location = "mobile.html"
}
async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
    else{
    //   new Swal("Unable to load!!","Please donwload metmask plugin for your browser and then continue","warning")
	Swal.fire({
  title: 'Unable to load!!',
  text: "Please donwload metmask plugin for your browser and then continue",
  icon: 'warning',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Download Metmask',
  allowOutsideClick: false
}).then((result) => {
  if (result.isConfirmed) {
    window.location.href = 'https://metamask.io/download'
  }
})
}
}


async function loadContract() {
	return await new window.web3.eth.Contract([
	{
		"constant": true,
		"inputs": [],
		"name": "tokenbalance",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isActive",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokensAvailable",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "RATE",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "goalReached",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "START",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DAYS",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "raisedAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyTokens",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CAP",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "BoughtTokens",
		"type": "event"
	}
],'0x8362B8850585e7c4e813806393798e2fa3Df0633')
}

async function load() {
    await loadWeb3();
	window.contract = await loadContract();
    updateStatus('Ready!');
}

function updateStatus(status) {
    console.log(status);
}
async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
            return accounts[0];
        }
async function addtoken() {
	document.getElementById("loading").style.display = 'block'
    document.getElementById("loading").style.marginLeft = '8rem'
    document.getElementById("form_to_hide").style.display = 'none'
    document.getElementById("modal-footer").style.display = 'none'
    document.getElementById("modal-footer1").style.display = 'none'
	const temp = await ethereum.request({
			method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: '0xd2a307f1178359FB00A781529bb513F26647aEd6', // The address that the token is at.
        symbol: 'EAGLEANT', // A ticker symbol or shorthand, up to 5 chars.
        decimals: 18, // The number of decimals in the token
        image: 'https://iili.io/RgXcv4.png', // A string url of the token logo
      },
    },
		})
	    document.getElementById("loading").style.display = 'none'
    document.getElementById("loading").style.marginLeft = '8rem'
    document.getElementById("form_to_hide").style.display = 'block'
    document.getElementById("modal-footer").style.display = 'block'
    document.getElementById("modal-footer1").style.display = 'block'
    }

load();
     let destTime = new Date("oct 15, 2021 10:00:00").getTime();    //launch time in milliseconds

    var x = setInterval(function(){
    let currTime = new Date().getTime();   //current time in milliseconds

    let diffTime = destTime - currTime;   //diffrence of both the time in milliseconds

    let days = Math.floor(diffTime/(24*60*60*1000));
    let hours = Math.floor((diffTime % (24*60*60*1000)) / (60*60*1000));
    let minutes = Math.floor(diffTime %(60*60*1000)/(60*1000));
    let seconds = Math.floor((diffTime%(60*1000)/1000));

    document.getElementById("day").innerHTML = days + " days";
    document.getElementById("hour").innerHTML = hours + " hr";
    document.getElementById("minute").innerHTML = minutes + " min";
    document.getElementById("second").innerHTML = seconds + " sec";
    } , 1000);
    function dataEntered(){
      const h = document.getElementById("token").value
      document.getElementById("bnb").value = h*0.00013
    }
  async function submit(){
    
    document.getElementById("loading").style.display = 'block'
    document.getElementById("loading").style.marginLeft = '8rem'
    document.getElementById("form_to_hide").style.display = 'none'
    document.getElementById("modal-footer").style.display = 'none'
    document.getElementById("modal-footer1").style.display = 'none'

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const telegram = document.getElementById("tele").value
      const tokens = document.getElementById("token").value
      const account = await getCurrentAccount();
      const bnb_to_send = document.getElementById("bnb").value*1000000000000000000
      axios({
        method : "get",
        url : `https://api.anteagle.tech/ico_database?name=${name}&email=${email}&telegram=${telegram}&tokens=${tokens}&account=${account}`
      }).then(res=>{
        // console.log(res)
    // document.getElementById("loading").style.display = 'none'

        if(res.data.success){
      contract.methods.buyTokens().send({
		  from : account,
		  value : bnb_to_send
	  }).then(async(res)=>{
      if(contract.events.BoughtTokens()){
    	await new Swal("Success",`Congratulation you have successfully bought ${tokens} EAGANT`,"success")
        window.location.reload()
      }
      
    })


        }
      })
    }

  