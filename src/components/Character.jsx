import React, { useEffect, useState } from 'react';
import { SKILL_LIST } from '../consts';
import Attributes from './Attributes';
import Classes from './Classes';
import MinimumRequirements from './MinimumRequirements';
import Skills from './Skills';

export default function Character({ index }) {
	const [selectedClass, setSelectedClass] = useState('Barbarian');
	const [selectedSkill, setSelectedSkill] = useState('Acrobatics');
    const [skillLevel, setSkillLevel] = useState(0);
    const [result, setResult] = useState("");
	const [showRequirements, setShowRequirements] = useState(true);
	const [diceCount, setDiceCount] = useState(20);

	const handleClassSelection = (e) => {
		setShowRequirements(true);
		setSelectedClass(e);
	};
	const handleShowRequirements = (value) => {
		setShowRequirements(value);
	};

	console.log({ selectedClass });

	return (
		<div>
			<p>Character: {index}</p>
			<p>Skill: {`${selectedSkill}: ${skillLevel}`}</p>
			<p>You Rolled: </p>
            <p>The DC was: {diceCount}</p>
            <p>Result: {result}</p>
			<div className='character-main'>
				<p>Character: {index}</p>
				<div className='skill-check-div'>
					<p>Skill Check</p>
					<div className='flex-center'>
						<div>
							<label htmlFor={`skills${index}`}>Skill:</label>
							<select
								name='skille'
								id={`skills${index}`}
								value={selectedSkill}
								onChange={(e) => setSelectedSkill(e.target.value)}
							>
								{SKILL_LIST.map(({ name, attributeModifier }) => (
									<option key={`${name}${attributeModifier}`} value={name}>
										{name}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor={`skills${index}`}>DC:</label>
							<input value={diceCount} />
						</div>
						<button className='roll'>Roll</button>
					</div>
				</div>
				<div className='skill-options'>
					<Attributes />
					<Classes changeFunction={handleClassSelection} />
					{showRequirements ? (
						<MinimumRequirements
							title={selectedClass}
							handleShowRequirements={handleShowRequirements}
						/>
					) : null}

					<Skills />
				</div>
			</div>
		</div>
	);
}
