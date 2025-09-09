	// Juego Pizza Frenzy
	// Estado y referencias
	const partesSeleccionadas = [];
	const debugEl = document.getElementById('debug');
	const listaEl = document.getElementById('selectedParts');

	// Helpers
	function obtenerNombre(el) {
		return el.dataset.name ?? el.getAttribute('name') ?? '(sin nombre)';
	}

	function mostrarNombre(el) {
		debugEl.textContent = 'name on hover: ' + obtenerNombre(el);
	}

	function renderSeleccionadas() {
		listaEl.innerHTML = partesSeleccionadas.map(n => `${n}<br>`).join('');
	}

	// Handlers
	function seleccionar(el) {
		const nombre = obtenerNombre(el);

		if (el.classList.contains('selected')) {
			el.classList.remove('selected');
			el.classList.add('unselected');
			const i = partesSeleccionadas.indexOf(nombre);
			if (i >= 0) partesSeleccionadas.splice(i, 1);
		} else {
			el.classList.add('selected');
			el.classList.remove('unselected');
			if (!partesSeleccionadas.includes(nombre)) {
				partesSeleccionadas.push(nombre);
			}
		}

		debugEl.textContent = 'class on click: ' + (el.className.baseVal ?? el.className);
		renderSeleccionadas();
	}
