export default function (itemsList) {
  let newObj = {
    body: [],
    hair: [],
    face: []
  }

  itemsList.forEach((item) => {
    newObj[item.category].push(item)
  })
  return newObj
}
