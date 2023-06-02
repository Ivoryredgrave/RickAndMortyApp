import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/funciones";
import { Table, Typography, Image, Input, Button, Space } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";

const TablaPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const { Title } = Typography;

  const columnas = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Imagen",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image alt="" src={image} />,
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              padding: 8,
            }}
          >
            <Space>
              <Input
                autoFocus
                placeholder="Buscar por nombre"
                value={selectedKeys[0]}
                onChange={(e) => {
                  setSelectedKeys(e.target.value ? [e.target.value] : []);
                  confirm({ closeDropdown: false });
                }}
                onPressEnter={() => {
                  confirm();
                }}
                onBlur={() => {
                  confirm();
                }}
              ></Input>

              <Button
                onClick={() => {
                  clearFilters();
                  confirm();
                }}
                type="danger"
              >
                Reiniciar
              </Button>
            </Space>
          </div>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Especie",
      dataIndex: "species",
      key: "species",
    },
    {
      title: "Genéro",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "Tipo",
      dataIndex: "type",
      key: "type",
    },
  ];

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <Table
        columns={columnas}
        scroll={{ y: 500 }}
        dataSource={personajes}
        pagination
        bordered
        rowKey={"id"}
        loading={false}
        title={() => (
          <Title level={4}>
            Personajes de Rick and Morty <HeartOutlined />{" "}
          </Title>
        )}
      />
    </>
  );
};

export default TablaPersonajes;
