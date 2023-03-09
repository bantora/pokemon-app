import './Navbar.css';

import type { ReactElement } from 'react';

import { useGetGenerationQuery } from '../../api/poke-api';
import { Link } from 'react-router-dom';

const NavBar = (): ReactElement => {

	const { data } = useGetGenerationQuery();

	return (
		<>
			<ul>
				{
					data?.results.map(( data , index ) => {
						return <li key={index}> 
								<Link to={data.name}>{data.name} </Link> 
						</li>
					})
				}
			</ul>
		</>
	)
}

export default NavBar;