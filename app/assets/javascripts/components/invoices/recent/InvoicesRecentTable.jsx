import React from "react";
import moment from "moment";
import numeral from "numeral"
import { Link } from 'react-router'
import Confirm from "components/common/dialogs/Confirm"
import InvoiceView from "components/invoices/view/InvoiceView"

class InvoicesRecentTable extends React.Component {
	
	componentDidMount() {
		this.props.fetchRecent()
	}
	
	render() {
		return (
			<div className="panel panel-default panel-primary">
				<div className="panel-heading">Recent Invoices</div>
				
				<div className="panel-body">
					<table className="table table-striped table-bordered table-hover">
						<thead>
							<tr className="active">
								<th width="90" className="text-center">ID</th>
								<th className="text-center">Buyer</th>
								<th className="text-center">City</th>
								<th className="text-center">Country</th>
								<th width="120" className="text-center">Issued</th>
								<th width="120" className="text-center">Value</th>
								<th width="130"></th>
							</tr>
						</thead>
						<tbody>
							{
								this.props.fetching &&
								<tr className="info">
									<td colSpan="7">
										Loading recent invoices ...
									</td>
								</tr>
							}
							{
								this.props.invoices.map((invoice) => {
									return (
										<tr key={invoice.id}>
											<td className="text-right">
												{invoice.publicId}
											</td>
											<td className="text-center">
												{invoice.buyerName}
											</td>
											<td className="text-center">
												{invoice.buyerCity}
											</td>
											<td className="text-center">
												{invoice.buyerCountry}
											</td>
											<td className="text-center">
												{invoice.issueDate}
											</td>
											<td className="text-right">
												{numeral(invoice.total / 100).format('0,0.00')} {invoice.currency}
											</td>
											<td className="text-center">
												<InvoiceView id={invoice.id} />
												<span>&nbsp;</span>
												<Link to={'/invoice/' + invoice.id} className="btn btn-primary btn-xs">
													<span className="glyphicon glyphicon-pencil"></span> Edit
												</Link>
											</td>
										</tr>
									)
								})
							}
							{
								this.props.invoices.length === 0 && !this.props.fetching &&
								<tr className="info">
									<td colSpan="7">
										No invoices added yet.
									</td>
								</tr>
							}
						</tbody>
					</table>
					
					<div className="row">
						<div className="col-md-12">
							<Link to="/invoices" className="btn btn-primary pull-right">
								<span className="glyphicon glyphicon-chevron-right"></span> See All
							</Link>
							<span className="pull-right">&nbsp;</span>
							<Link to="/invoices/add" className="btn btn-primary pull-right">
								<span className="glyphicon glyphicon-plus"></span> Add Invoice
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default InvoicesRecentTable