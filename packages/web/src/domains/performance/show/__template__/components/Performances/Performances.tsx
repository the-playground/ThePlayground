import React from 'react';

import { ShowPerformance } from '@web/domains/performance/show';
import { Heading, BodyText, Container } from '@web/ui/core';
import {
    getTotalPerformanceCount,
    getRemainingPerformanceCount,
} from '../../../__lib__';

import * as styled from './Performances.styles';
import { TicketTile } from './TicketTile/TicketTile';

export const Performances: React.FC<PerformancesProps> = ({ performances }) => {
    const totalPerformances = getTotalPerformanceCount(performances);
    const remainingPerformances = getRemainingPerformanceCount(performances);
    const chancesText = remainingPerformances === 1 ? 'chance' : 'chances';

    return (
        <styled.Performances performancesCount={performances.length}>
            <Container>
                <div className="lead-in">
                    <Heading size="xs" color="light" className="heading">
                        Choose from available performances
                    </Heading>
                    <BodyText size="s" color="medium" className="remaining">
                        [ <strong>{remainingPerformances}</strong> more{' '}
                        {chancesText} to catch the show ]
                    </BodyText>
                </div>
                <ul className="performances-list">
                    {performances.map((performance) => {
                        return (
                            <TicketTile
                                {...performance}
                                key={performance.datetime}
                            />
                        );
                    })}
                </ul>
            </Container>
        </styled.Performances>
    );
};

export interface PerformancesProps {
    performances: ShowPerformance[];
}
