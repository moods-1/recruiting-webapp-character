import React from 'react';
import { SKILL_LIST } from '../consts';

export default function Skills() {
	return (
		<div className='skill-options-div large '>
			<p className='title'>Skills</p>
			<div>
				{SKILL_LIST.map(({ name, attributeModifier }) => (
					<div key={name}>
						{`${name}:${0} (Modifier: ${attributeModifier}): ${0}`}
            <button className='number-change'>+</button>
            &nbsp;
            <button className='number-change'>-</button>
            &nbsp;
            <span>total:{0}</span>
					</div>
				))}
			</div>
		</div>
	);
}
