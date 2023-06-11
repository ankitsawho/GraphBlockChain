# SubOne Subgraph

Contract Transfer in deployed in polygon testnet mumbai

Install graph cli
```
npm install -g @graphprotocol/graph-cli
```

Initialize subgraph
```
graph init --studio subone
```

AuthN in cli
```
graph auth --studio 69bb0904f76af4ac227c85ad9735efd5
```
Build Subgraph
```
cd subone
graph codegen && graph build
```

Deploy subgraph
```
graph deploy --studio subone
```

[Link](https://thegraph.com/studio/subgraph/subone/)
<hr>
<img width="1440" alt="Screenshot 2023-06-12 at 02 14 55" src="https://github.com/ankitsawho/GraphBlockChain/assets/65439290/66e5ebf3-88af-40ee-b7db-4e3d118aa0e9">
