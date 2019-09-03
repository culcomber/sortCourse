let numberWhat = [];
function toArray(dataLink){
  dataLink.forEach(index=>{
    index.forEach(value=>{
      let flag = true;
      for(let i=0;i<numberWhat.length;i++){
        if(numberWhat[i] === value){
          flag = false;
          break
        }
      }
      if(flag === true) numberWhat.push(value)
    })
  });
  return numberWhat
}

/**
 * 将数据转换为邻接矩阵,如果有环返回-1，否则返回邻接矩阵
 * @param dataLink
 * @returns {Array}
 */
function arrayToMatrix(dataLink){
  let number = toArray(dataLink);
  let matrix = [];
  let dataNumber = number.length;
  let ele = [];
  for(let i = 0; i < dataNumber; i++){
    ele.push(0)
  }
  for(let i = 0; i < dataNumber; i++){
    matrix.push([]);
    for(let j = 0; j < dataNumber; j++){
      matrix[i].push(0)
    }
  }
  dataLink.forEach(index=>{
    let x = -1, y = -1;
    for(let num in number){
      if(index[0] === number[num]) x = num;
      if(index[1] === number[num]) y = num;
      if(x !== -1 && y !== -1) break
    }
    if(x !== -1 && y !== -1){
      matrix[x][y]=1;
      x = -1;
      y = -1
    }
  });
  /*for(let i = 0; i < dataNumber; i++){
        if(matrix[i][i] === 1) return -1
    }*/
  for(let i = 0; i < dataNumber; i++){
    for(let j = 0; j <= i; j++){
      if(matrix[i][j] === matrix[j][i] && matrix[i][j] === 1)
        return -1
    }
  }
  return matrix
}

/**
 * 将数据装换为节点信息
 * @param dataLink
 * @returns {Array}
 */
let inforData = [];
function arrayToData(dataLink){
  let number = toArray(dataLink);
  for( let i = 0; i <numberWhat.length; i++){
    inforData.push({name:numberWhat[i]})
  }
  return inforData
}

/**
 * 将数据转换为节点关系
 * @param dataLink
 * @returns {Array}
 */
function arrayToLinks(dataLink){
  let links = [];
  let num = dataLink.length;
  for(let i = 0; i < num; i++){
    links.push({});
    links[i].source = dataLink[i][0];
    links[i].target = dataLink[i][1]
  }
  return links
}

export {arrayToMatrix, arrayToData, arrayToLinks}

