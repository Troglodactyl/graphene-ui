import React from "react";
import FormattedAsset from "./FormattedAsset";
import ChainTypes from "./ChainTypes";
import BindToChainState from "./BindToChainState";
import utils from "common/utils";

/**
 *  Given an asset amount, displays the portion of total supply if possible
 *
 *  Expects two properties
 *  -'asset' which should be a asset id
 *  -'amount' which is the amount itself
 */

@BindToChainState({keep_updating: true})
class SupplyProportion extends React.Component {

    static propTypes = {
        asset: ChainTypes.ChainAsset.isRequired,
    }

    render() {
        let {amount, asset} = this.props;

        return (<span>{amount/asset.get('dynamic').get('current_supply')*1000000}</span>);
    }
}


@BindToChainState({keep_updating: true})
class BalanceSupplyProportion extends React.Component {

    static propTypes = {
        balance: ChainTypes.ChainObject.isRequired
    }

    render() {
        let amount = Number(this.props.balance.get('balance'));
        let type = this.props.balance.get('asset_type');
            
        return <SupplyProportion amount={amount} asset={type}/>;
    }
}

SupplyProportion.BalanceSupplyProportion = BalanceSupplyProportion;
export default SupplyProportion;