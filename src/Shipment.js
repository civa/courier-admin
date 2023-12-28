import React from 'react';

// Sample data
const shipments = [
  {
    tracking_id: "b",
    cargo_handler: "just us handler",
    sender: "john moore",
    receiver: "joanna more",
    from: "333 freemont",
    to: "444 freemont",
    received_at: "11/11/11",
    delivered_at: "11/11/11",
    status: "Received",
    updates: []
  }
  // ... more shipments
];

function ShipmentsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Tracking ID</th>
          <th>Cargo Handler</th>
          <th>Sender</th>
          <th>Receiver</th>
          <th>From</th>
          <th>To</th>
          <th>Received At</th>
          <th>Delivered At</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment, index) => (
          <tr key={index}>
            <td>{shipment.tracking_id}</td>
            <td>{shipment.cargo_handler}</td>
            <td>{shipment.sender}</td>
            <td>{shipment.receiver}</td>
            <td>{shipment.from}</td>
            <td>{shipment.to}</td>
            <td>{shipment.received_at}</td>
            <td>{shipment.delivered_at}</td>
            <td>{shipment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShipmentsTable;
