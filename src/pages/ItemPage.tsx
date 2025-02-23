/*import {useEffect, useState} from "react"
import { Trash2 } from "react-feather"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.tsx";
import {deleteItem, getALlItem, saveItem, updateItem} from "../reducer/ItemReducer.ts";
import {Item} from "../models/Item.ts";*/
import {Button, Col, Form, Input, Modal, Row, Table} from "antd";
import {useState} from "react";

function ItemPage() {

  const [title] = useState("Add Item");
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


  /* const [itemId, setItemId] = useState("")
   const [name, setName] = useState("")
   const [quantity, setQuantity] = useState("")
   const [price, setPrice] = useState("")
   const [isEditing, setIsEditing] = useState(false)
   const dispatch = useDispatch<AppDispatch>();
   const items = useSelector((state) => state.item || []);

   useEffect(() => {
       getAllItems();
   });

   const getAllItems = async () => {
       await dispatch(getALlItem());
   }

   const handleAdd = () => {
     if (!itemId || !name || !quantity || !price) {
       alert("All fields are required!")
       return
     }
     const newItem = new Item(0,itemId,name,parseInt(quantity),parseInt(price));
     dispatch(saveItem(newItem));
     resetForm()
   }

   const handleEdit = (item: any) => {
     setItemId(item.itemId)
     setName(item.name)
     setQuantity(item.quantity)
     setPrice(item.price)
     setIsEditing(true)
   }

   const handleUpdate = () => {
     if (!itemId || !name || !quantity || !price) {
       alert("All fields are required!")
       return
     }
     const updateCustomerDetails = new Item(0,itemId,name,parseInt(quantity),parseInt(price));
     dispatch(updateItem(updateCustomerDetails));
     resetForm()
   }

   const handleDelete = (itemId: string) => {
     if (window.confirm("Are you sure you want to delete this item?")) {
         dispatch(deleteItem(itemId));
     }
   }

   const resetForm = () => {
     setItemId("")
     setName("")
     setQuantity("")
     setPrice("")
     setIsEditing(false)
   }*/

  return (
      <div className="p-6">
        <div className="flex justify-end">
          <Button
              type="primary"
              onClick={openAddModal}
              className="bg-green-500 text-white p-2 rounded mr-2"
          >
            Add Item
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
                      label="Item Name"
                      name="itemName"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the item name!",
                        },
                      ]}
                  >
                    <Input
                        placeholder="Enter item name"

                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                      label="Quantity"
                      name="quantity"
                      rules={[
                        { required: true, message: "Please enter the quantity!" },
                      ]}
                  >
                    <Input
                        placeholder="Enter quantity"/>

                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                      label="Price"
                      name="price"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the price!",
                        },
                      ]}
                  >
                    <Input
                        placeholder="Enter price "

                    />
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

export default ItemPage
