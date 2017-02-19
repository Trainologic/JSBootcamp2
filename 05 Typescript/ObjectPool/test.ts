var pool = new ObjectPool();

var obj = {};

pool.add(obj);
pool.add(obj);

var res = pool.get();
res = pool.get();

console.log(res == null);
