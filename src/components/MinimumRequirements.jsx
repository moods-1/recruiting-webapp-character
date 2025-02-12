import { CLASS_LIST } from '../consts';

export default function MinimumRequirements({ title, handleShowRequirements }) {
	const requirements = CLASS_LIST[title];
	return (
		<div className='skill-options-div'>
			<p className='title'>{`${title} Minimum Requirements`}</p>
			<div>
				{Object.entries(requirements).map(([attribute, number]) => (
					<p key={`${attribute}${number}`}>{`${attribute}: ${number}`}</p>
				))}
			</div>
			<button className='close' onClick={() => handleShowRequirements(false)}>
				Close Requirements View
			</button>
		</div>
	);
}
