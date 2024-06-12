import React from 'react';
import Fundraising from '../Fundraising/Fundraising';
import * as S from './Styled';

/**
 * @param {{fundraisingList: Fundraising[]}}
 */
const FundraisingList = ({ fundraisingList }) => {
    return (
        <S.FundraisingList>
            {fundraisingList &&
                fundraisingList.map((fundraising) => (
                    <Fundraising
                        key={fundraising.id}
                        fundraising={fundraising}
                        type="card"
                    />
                ))}
        </S.FundraisingList>
    );
};

export default FundraisingList;
