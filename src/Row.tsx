import Square from './Square';

function Row({mult, squares, onRowClick}) {
    const m = mult*3;
    return (
      <>
      <div className="board-row">
            <Square value={squares[m+0]} onSquareClick={() => onRowClick(m+0)} />
            <Square value={squares[m+1]} onSquareClick={() => onRowClick(m+1)} />
            <Square value={squares[m+2]} onSquareClick={() => onRowClick(m+2)} />
      </div>
      </>
    )
  }

  export default Row