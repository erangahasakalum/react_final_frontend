import {Button, Col, Form, Input, Modal, Row, Table} from "antd";
import {useState} from "react";

function CustomerPage() {
    const [title] = useState("Add Customer");
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const openAddModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        // Simulate a request or some action here
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    /* const [id, setId] = useState("")
     const [name, setName] = useState("")
     const [address, setAddress] = useState("")
     const [email, setEmail] = useState("")
     const dispatch = useDispatch<AppDispatch>();
     const [isEditing, setIsEditing] = useState(false)

     // @ts-ignore
     const customer = useSelector((state) => state.customer || []);

     useEffect(() => {
         getAllCustomers();
     });

     const getAllCustomers = async () => {
         await dispatch(getAllCustomer());
     }

     const handleAdd = () => {
         if (!id || !name || !address || !email) {
             alert("All fields are required!")
             return
         }
         // setCustomers([...customers, { id, name, address, email}])
         const newCustomer = new Customer(id, name, address, email);
         dispatch(saveCustomer(newCustomer));
         getAllCustomers();
         resetForm()
     }

     const handleEdit = (customer: any) => {
         setId(customer.customerId);
         setName(customer.name);
         setAddress(customer.address);
         setEmail(customer.email);
         // setPhone(customer.phone)
         setIsEditing(true)
     }

     const handleUpdate = () => {
         if (!id || !name || !address || !email) {
             alert("All fields are required!")
             return
         }
         const updateCustomerDetails = new Customer(id,name,address,email);
         dispatch(updateCustomer(updateCustomerDetails));
         resetForm()
     }

     const handleDelete = (customerId: string) => {
         if (window.confirm("Are you sure you want to delete this customer?")) {
             dispatch(deleteCustomer(customerId));
         }
     }

     const resetForm = () => {
         setId("")
         setName("")
         setAddress("")
         setEmail("")
         setIsEditing(false)
     }
 */
    return (
        <div className="p-6">
            <div className="flex justify-end">
                <Button
                    type="primary"
                    onClick={openAddModal}
                    className="bg-green-500 text-white p-2 rounded mr-2"
                >
                    Add Customer
                </Button>
                <Modal
                    title={title}
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <Form requiredMark={false} layout={"vertical"}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Id"
                                    name="id"
                                    rules={[
                                        { required: true, message: "Please enter the id" },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter id"/>

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the first name!",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter first name"

                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                        { required: true, message: "Please enter the last name!" },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter last name"/>

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the address!",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter address "

                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please enter the email!" },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter email"/>

                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>

                </Modal>
            </div>

            <div>
                <Table/>
            </div>
        </div>
    )
}

export default CustomerPage
