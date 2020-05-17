class Vector3{

    constructor(x = 0, y = 0, z = 0){

        this.x = x;
        this.y = y;
        this.z = z;


    }

    add(vector){

        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;

    }

    sub(vector){

        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;

    }

    scale(scaler){

        this.x *= scaler;
        this.y *= scaler;
        this.z *= scaler;

    }

    divide(scaler){

        this.x /= scaler;
        this.y /= scaler;
        this.z /= scaler;

    }

    length(){

        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    }

    normalize(){

        let length = length();

        this.x /= length;
        this.y /= length;
        this.z /= length;

    }

    dotproduct(vector){

        return this.x * vector.x + this.y * vector.y + this.z * vector.z;

    }

    crossproduct(vector){

        let newX = vector.y * this.z - this.y * vector.z;
        let newY = vector.z * this.x - this.z * vector.x;
        let newZ = vector.x * this.y - this.x * vector.y;

        return new Vector3(newX, newY, newZ);
    }


}

//Random comment for test.

class Vector2{

    constructor(x = 0, y = 0){

        this.x = x;
        this.y = y;

    }

    add(vector){

        this.x += vector.x;
        this.y += vector.y;

    }

    sub(vector){

        this.x -= vector.x;
        this.y -= vector.y;

    }


    scale(scaler){

        this.x *= scaler;
        this.y *= scaler;

    }

    divide(scaler){

        this.x /= scaler;
        this.y /= scaler;

    }

    length(){

        return Math.sqrt(this.x * this.x + this.y * this.y);

    }

    normalize(){

        let length = length();

        this.x /= length;
        this.y /= length;

    }

    dotproduct(vector){

        return this.x * vector.x + this.y * vector.y;

    }

}

class Matrix{

    // [[1, 2, 3], 
    //  [4, 5, 6], 
    //  [7, 8, 9]]
    constructor(array){

        this.array = array;

    }

    add(matrix){

        let m1Rows = this.array.length;
        let m1Columns = this.array[0].length;

        let m2Rows = matrix.array.length;
        let m2Columns = matrix.array[0].length;

        if(m1Rows != m2Rows || m1Columns != m2Columns){

            return "Error! Matrices not the same dimensions!"

        }

        for(let i = 0; i < m1Rows * m1Columns; i++){

            console.log("Row Index: " + Math.floor(i / 3));
            console.log("Column Index: " + i);
            
            let rowIndex = Math.floor(i / m1Rows);
            let columnIndex = i % m1Columns;

            let currentValue = this.array[rowIndex][columnIndex]
            
            this.array[rowIndex][columnIndex] = currentValue + this.matrix.array[rowIndex][columnIndex]

        }

    }

    sub(matrix){

        let m1Rows = this.array.length;
        let m1Columns = this.array[0].length;

        let m2Rows = matrix.array.length;
        let m2Columns = matrix.array[0].length;

        if(m1Rows != m2Rows || m1Columns != m2Columns){

            return "Error! Matrices not the same dimensions!"

        }

        for(let i = 0; i < m1Rows * m1Columns; i++){

            console.log("Row Index: " + Math.floor(i / 3));
            console.log("Column Index: " + i);
            
            let rowIndex = Math.floor(i / m1Rows);
            let columnIndex = i % m1Columns;

            let currentValue = this.array[rowIndex][columnIndex]
            
            this.array[rowIndex][columnIndex] = currentValue - this.matrix.array[rowIndex][columnIndex]

        }

    }

    multiply(){

        let m1Rows = this.array.length;
        let m1Columns = this.array[0].length;

        let m2Rows = matrix.array.length;
        let m2Columns = matrix.array[0].length;

        if(m1Columns != m2Rows){

            return "Error your columns do not equal the number of rows"

        }

        let rowMatrix = [];
        let columnMatrix = [];

        let rowIndex = 0;

        for(let i = 0; i < m1Rows * m2Columns; i++){

            let sum = 0

            let rowIndex = Math.floor(i / m1Rows);
            let columnIndex = i % m2Columns;
            
            for(let j = 0; j < m1Columns.length; j++){

                sum += this.array[rowIndex][j] * matrix.array[j][columnIndex];

            }

            if(rowIndex > m1Columns){

                rowMatrix.push(columnMatrix);
                columnMatrix = [];
                rowIndex = 0;

            }else{

                columnMatrix.push(sum);
                rowIndex++;

            }
            
        }

    }

}