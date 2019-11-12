# How to run this project?

```
git clone http://github.com/onurguler/scobio-social
cd scobio-social
npm i
cd client
npm i
cd ..
npm run client
```

Birlikte çalışabilmek adına yapılan her component yeni bir branch içine commitlenmeli.
Ardından sayfalara ait branchlerle birleştirilmeli.

# Creating a new branch

```
git checkout -b yenibranchismi
git add .
git commit -m "commit mesaji"
git push -u origin yenibranchismi
```

# Switching branches

```
git checkout branchismi -> master, loginpage vs
```

# Merging branches

Güncel bir branch içindeyken birleştirmek istediğimiz branche geçiş yaparız.

```
git checkout guncelolmayanbranch
git merge guncelbranch
git push -u origin guncelolmayanbranch
```

# Örnek commit

```
git checkout -b postcomponent
git add .
git commit -m "added post component"
git push -u origin postcomponent

git checkout homepage
git pull -> biri değişiklik yapmışsa onları çekelim
git merge postcomponent
git push -u origin postcomponent
```
