import { useEffect, useState } from "react";
import { createClient } from "urql";

const API_KEY = "c32e2ae5fdfc9b5c2d2d8f1e89f2bc46";
const URL = `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7`;
const query = `{
  tokens(first: 20) {
    id
    name
    symbol
    decimals
  }
}`;

function App() {
	const client = createClient({
		url: URL,
	});

	const [tokens, setTokens] = useState([]);

	useEffect(() => {
		client
			.query(query)
			.toPromise()
			.then(({ data }) => {
				setTokens(data.tokens);
				console.log(data.tokens);
			});
	}, []);

	return (
		<>
			<h1 className="bg-slate-600 m-2 w-fit text-2xl p-2 rounded-full text-slate-50">
				uniswap
			</h1>
			{tokens.length !== 0 &&
				tokens.map((token) => {
					return (
						<div
							key={token.id}
							className="m-1 w-1/3 p-2 rounded-lg bg-slate-50 shadow-md"
						>
							<p className="font-semibold text-slate-800">
								{token.name}
							</p>
							<p className="font-bold">{token.symbol}</p>
							<p className="">{token.decimals}</p>
						</div>
					);
				})}
		</>
	);
}

export default App;
