import {Button, Form, Modal} from "antd";
import {useState} from "react";

function CustomerPage() {
    const [title] = useState("Add Customer");
    const [open, setOpen] = useState(true);
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
            <div>
                <Button
                    type="primary"
                    onClick={openAddModal}
                    className="position: relative left-1.5"
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
                    <Form layout="vertical" requiredMark={false}>

                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default CustomerPage
