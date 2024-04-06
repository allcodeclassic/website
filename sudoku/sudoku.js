document.addEventListener('DOMContentLoaded', function() {
	const gridSize = 9;
	const solveButton = document.getElementById("solve-btn");
	solveButton.addEventListener('click', solveSudoku);

	const sudokuGrid = document.getElementById("sudoku-grid");
	for (let row = 0; row < gridSize; row++) {
		const newRow = document.createElement("tr");
		for (let column = 0; column < gridSize; column++) {
			const cell = document.createElement("td");
			const input = document.createElement("input");
			input.type = "number";
			input.className = "cell";
			input.id = `cell-${row}-${column}`;
			cell.appendChild(input);
			newRow.appendChild(cell);
		}
		sudokuGrid.appendChild(newRow);
	}
});

async function solveSudoku() {
	const gridSize = 9;
	const sudokuArray = [];

	// Fill the sudokuArray with input values from the grid
    for (let row = 0; row < gridSize; row++) {
        sudokuArray[row] = [];
        for (let col = 0; col < gridSize; col++) {
            const cellId = `cell-${row}-${col}`;
            const cellValue = document.getElementById(cellId).value;
            sudokuArray[row][col] = cellValue !== "" ? parseInt(cellValue) : 0;
        }
    }

	for (let row = 0; row < gridSize; row++) {
		for (let column = 0; column < gridSize; column++) {
			const cellId = `cell-${row}-${column}`;
			const cell = document.getElementById(cellId);
			if (sudokuArray[row][column] !== 0) {
				cell.classList.add("user-input");
			}
		}
	}

	if (solveSudokuHelper(sudokuArray)) {
		for (let row = 0; row < gridSize; row++) {
			for (let column = 0; column < gridSize; column++) {
				const cellId = `cell-${row}-${column}`;
				const cell = document.getElementById(cellId);
				if (!cell.classList.contains("user-input")) {
					cell.value = sudokuArray[row][column];
					cell.classList.add("solved");
					await sleep(20);
				}
			}
		}
	} else {
		alert("No solution exists for the given Sudoku puzzle.");
	}
}

function solveSudokuHelper(board) {
	const gridSize = 9;

	for (let row = 0; row < gridSize; row++) {
		for (let column = 0; column < gridSize; column++) {
			if (board[row][column] === 0) {
				for (let num = 1; num <= 9; num++) {
					if (isValidMove(board, row, column, num)) {
						board[row][column] = num;
						if (solveSudokuHelper(board)) {
							return true;
						}
						board[row][column] = 0;
					}
				}
				return false;
			}
		}
	}
	return true;
}

function isValidMove(board, row, column, num) {
	const gridSize = 9;
	for (let index = 0; index < gridSize; index++) {
		if (board[row][index] === num || board[index][column] === num) {
			return false;
		}
	}

	const startRow = Math.floor(row / 3) * 3;
	const startColumn = Math.floor(column / 3) * 3;

	for (let indexRow = startRow; indexRow < startRow + 3; indexRow++) {
		for (let indexColumn = startColumn; indexColumn < startColumn + 3; indexColumn++) {
			if (board[indexRow][indexColumn] === num) {
				return false;
			}
		}
	}
	return true;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}