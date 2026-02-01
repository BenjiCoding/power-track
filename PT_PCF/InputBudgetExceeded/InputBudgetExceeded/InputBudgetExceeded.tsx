import * as React from 'react';
import {
  Input,
  createDOMRenderer,
} from '@fluentui/react-components';

export interface IBudgetExceededProps {
  budgetText: string;
  budgetValue?: number | null;
  totalHours?: number | null;
  onBudgetChange: (value: string) => void;
}

const renderer = createDOMRenderer(document);

const GREEN_BORDER = '#2e7d32';
const ORANGE_BORDER = '#f59e0b';
const RED_BORDER = '#dc2626';

const getBorderColor = (
  budgetValue?: number | null,
  totalHours?: number | null
): string => {
  if (budgetValue == null || totalHours == null || budgetValue <= 0) {
    return GREEN_BORDER;
  }

  const overage = totalHours - budgetValue;
  if (overage <= 0) {
    return GREEN_BORDER;
  }

  const overagePercent = overage / budgetValue;
  if (overagePercent > 0.2) {
    return RED_BORDER;
  }

  return ORANGE_BORDER;
};

export class LinearInputBudgetExceeded extends React.Component<IBudgetExceededProps> {
  public render(): React.ReactNode {
    const borderColor = getBorderColor(
      this.props.budgetValue,
      this.props.totalHours
    );

    return (
          <Input
            value={this.props.budgetText}
            placeholder="Entrer le budget"
            input={{ style: { color: borderColor, fontWeight: 'bold' } }}
            onChange={(_event, data) => this.props.onBudgetChange(data.value)}
          />
    );
  }
}
