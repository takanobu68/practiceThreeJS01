"use strict";

{
	window.addEventListener('load', init);

	function init() {

		const width = window.innerWidth;
		const height = window.innerHeight;

		const scene = new THREE.Scene();

		const light = new THREE.DirectionalLight(0xffffff);
		light.position.set(0, 0, 0);
		scene.add(light);

		const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
		camera.position.set(50, -10, 100);
		camera.lookAt(30, 0, 0);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(width, height);
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		document.getElementById('stage').appendChild(renderer.domElement);

		let text1;
		let text2;
		let text3;
		let title;

		const loader = new THREE.FontLoader();
		loader.load('./libs/helvetiker_regular.typeface.json', font => {
			createText(font);
			render();
		});


		function createText(font) {
			text1 = new THREE.Mesh(
				new THREE.TextGeometry('Product', {
					font: font,
					size: 12,
					height: 4
				}),
				new THREE.MeshBasicMaterial({ color: 0x7777ff, side: THREE.DubleSide, wireframe: true })
			);
			text2 = new THREE.Mesh(
				new THREE.TextGeometry('Engineer', {
					font: font,
					size: 12,
					height: 4
				}),
				new THREE.MeshBasicMaterial({ color: 0x7777ff, side: THREE.DubleSide, wireframe: true })
			);
			text3 = new THREE.Mesh(
				new THREE.TextGeometry('Salon', {
					font: font,
					size: 12,
					height: 4
				}),
				new THREE.MeshBasicMaterial({ color: 0x7777ff, side: THREE.DubleSide, wireframe: true })
			);
			title = new THREE.Group();
			text1.position.set(0, 20, 10);
			text2.position.set(10, 0, 0);
			text3.position.set(40, -20, 0);
			title.add(text1)
			title.add(text2)
			title.add(text3)
			scene.add(title);
		}

		function render() {
			let speed = 0.005;
			let titleRotaX = title.rotation.x + speed,
				titleRotaY = title.rotation.y + speed,
				titleRotaZ = title.rotation.z + speed;
			title.rotation.set(titleRotaX, titleRotaY, titleRotaZ);
			renderer.render(scene, camera);
			requestAnimationFrame(render)
		}
	}
}
