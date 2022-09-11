$(document).ready(function(){
			//alert(0)
			$('.nama').click(function(){
				//alert(1)
				let isi = $(this).text();
				//alert(isi);
				let isi2 = prompt('Namanya siapa?', isi);
				if(!isi2) return;
				//alert(isi2);
				
				$(this).text(isi2);
				})
			})
			
$(document).ready(function(){
			//alert(0)
			$('.alamat').click(function(){
				//alert(1)
				let isi = $(this).text();
				//alert(isi);
				let isi2 = prompt('Alamatnya?', isi);
				if(!isi2) return;
				//alert(isi2);
				
				$(this).text(isi2);
				})
			})
			
			
$('.hapus').click(function(){
				let yakin = confirm('Mau di hapus?');
				if(!yakin) return;
				
				let id = $(this).prop('id');
				
				let rid = id.split('__');
				let baris_ke = rid[1];
			
				$('#row__'+baris_ke).slideUp()
			})