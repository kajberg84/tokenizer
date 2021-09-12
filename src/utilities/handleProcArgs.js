export function checkProcessArgs(){
  const firstInput = process.args(slice(2,3))
  console.log("first process arg", firstInput);
}