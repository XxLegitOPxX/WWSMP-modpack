git add -A
git commit -m $1
git push origin

git tag $1
git push --tags