let API_URL = 'https://634d61f2acb391d34a9beb43.mockapi.io/daftarPsikolog';

let daftarPsikolog = document.querySelector('.row-psikolog');

let getDataPsikolog = async (URL) => {
	let response = await fetch(URL);
	let psikolog = await response.json();

	// menampilkan data psikolog
	psikolog.forEach((item, index) => {
		console.log(item);
		daftarPsikolog.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${item.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nama : ${item.Name}</h5>
                <p class="card-text">Umur : ${item.Age}</p>
                <p class="card-text">Pengalaman : ${item.experience}</p>
                <p class="card-text">Alamat : ${item.alamat}</p>
                <p class="card-text">No.Hp : ${item.noHp}</p>
                <p class="card-text">Id : ${item.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
	});
};
getDataPsikolog(API_URL);
