import React, { useState } from "react";
import "./OpenButtonComponent.css";

const directions = {
  R: "R",
  B: "B",
};
const size = 100;
const initialBoard = Array(size)
  .fill()
  .map(() => Array(100).fill(false));
initialBoard[0][0] = true;

const OpenButtonComponent = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleClick = (rowIndex, colIndex, dir) => {
    if (dir === directions.R) {
      if (colIndex !== size) {
        board[rowIndex][colIndex + 1] = true;
      }
    } else {
      if (rowIndex !== size) {
        board[rowIndex + 1][colIndex] = true;
      }
    }

    setBoard([...board]);
  };

  return (
    <>
      {board.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((column, colIndex) => {
              return (
                <div className="col">
                  {column && (
                    <>
                      {!board[rowIndex + 1][colIndex] && (
                        <button
                          onClick={() =>
                            handleClick(rowIndex, colIndex, directions.B)
                          }
                        >
                          ↓
                        </button>
                      )}
                      {`${rowIndex} ${colIndex}`}
                      {!row[colIndex + 1] && (
                        <button
                          onClick={() =>
                            handleClick(rowIndex, colIndex, directions.R)
                          }
                        >
                          →
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default OpenButtonComponent;
