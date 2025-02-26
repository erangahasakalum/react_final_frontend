import {Form, Input, InputNumber, Button, Select, DatePicker, Row, Col, Divider} from 'antd';

const PlaceOrderForm = () => {
    return (
        <section className="p-4">
            <div className="flex">
                {/* Left Side - Form Section */}
                <div className="w-3/4 pr-4"> {/* Reduce the width of the left side */}
                    {/* Customer and Item Form */}
                    <div>
                        <Form requiredMark={false} layout={"vertical"}>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="Order Id"
                                        name="orderId"
                                        rules={[{ required: true, message: 'Order ID is a required field : Pattern Oo-1.' }]}
                                    >
                                        <Input placeholder="O001" className="w-full" />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Date"
                                        name="date"
                                        rules={[{ required: true, message: 'Please input valid current date.' }]}
                                    >
                                        <DatePicker className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="Customer Id"
                                        name="customerId"
                                        rules={[{ required: true, message: 'Please select a customer ID.' }]}
                                    >
                                        <Select placeholder="Select Customer ID" className="w-full">
                                            {/* Add options dynamically here */}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Customer Name"
                                        name="customerName"
                                        rules={[{
                                            required: true,
                                            message: 'Min 5, Max 20, Space Allowed, only English letters.'
                                        }]}
                                    >
                                        <Input placeholder="Customer Name" className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="City"
                                        name="customerCity"
                                        rules={[{ required: true, message: 'Max 25 letters, only English letters.' }]}
                                    >
                                        <Input placeholder="City" className="w-full" />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Telephone"
                                        name="customerTelephone"
                                        rules={[{
                                            required: true,
                                            message: 'Enter valid phone number, no spaces, max 10 digits.'
                                        }]}
                                    >
                                        <Input placeholder="Telephone" className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                        {/* Item Form */}
                        <Form requiredMark={false} layout={"vertical"}>
                            <span>Item section</span>
                            <Divider className="colors: accent-red-50 "/>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="Item Code"
                                        name="itemCode"
                                        rules={[{ required: true, message: 'Please select an item code.' }]}
                                    >
                                        <Select placeholder="Select Item Code" className="w-full">
                                            {/* Add item options dynamically here */}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Item Name"
                                        name="itemName"
                                        rules={[{ required: true, message: 'Min 5, Max 20, only English letters.' }]}
                                    >
                                        <Input placeholder="Item Name" className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="QTY On Hand"
                                        name="qtyOnHand"
                                        rules={[{ required: true, message: 'Only numbers allowed, max 15 digits.' }]}
                                    >
                                        <InputNumber min={1} className="w-full" />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Order QTY"
                                        name="orderQty"
                                        rules={[{ required: true, message: 'Please input valid quantity.' }]}
                                    >
                                        <InputNumber min={1} className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={9}>
                                    <Form.Item
                                        label="Price"
                                        name="price"
                                        rules={[{ required: true, message: 'Please input price, numbers only.' }]}
                                    >
                                        <InputNumber min={1} className="w-full" />
                                    </Form.Item>
                                </Col>
                                <Col span={9}>
                                    <Form.Item
                                        label="Discount Rate"
                                        name="discountRate"
                                        rules={[{ required: true, message: 'Please input valid discount rate.' }]}
                                    >
                                        <InputNumber min={0} max={100} className="w-full" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="w-full">
                                            Add To Cart
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>

                {/* Right Side - Billing Section */}
                <div className="w-2/4 p-6 bg-white shadow rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-600">Billing Your Order</h4>
                    <div className="border-t border-gray-300 mb-4 mt-2"></div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Sub Total</h4>
                            <h5 id="subTotal" className="font-medium">0.00</h5>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Discount</h4>
                            <h5 id="discount" className="font-medium">0.00</h5>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Balance</h4>
                            <h5 id="balance" className="font-medium">0.00</h5>
                        </div>
                    </div>

                    <Form.Item>
                        <Button type="default" id="cancelBtn" className="w-full mb-2">
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" id="purchaseBtn" className="w-full">
                            Purchase
                        </Button>
                    </Form.Item>
                </div>
            </div>
        </section>
    );
};

export default PlaceOrderForm;
