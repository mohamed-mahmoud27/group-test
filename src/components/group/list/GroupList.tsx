import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import "./group-list.css";
import { IGroup } from "../../../types";
import { groups as data } from "../../../libs";
import { GroupForm } from "../form";

export const GroupList = () => {
  const [groups, setGroups] = useState<Array<IGroup>>([]);
  const [groupForm, setGroupForm] = useState<{
    data?: IGroup;
    formType?: "add" | "edit" | undefined;
    showForm: boolean;
  }>({ showForm: false });

  useEffect(() => {
    setGroups(data);
  }, []);

  const onEdit = (formValues: IGroup) => {
    const updatedGroups = groups.map((group) =>
      group.id === groupForm.data?.id ? { ...group, ...formValues } : group
    );

    setGroups(updatedGroups);
    setGroupForm({ formType: undefined, data: undefined, showForm: false });
  };

  const onDelete = (id: string) => {
    setGroups(groups.filter((item) => item.id !== id));
  };

  const onAdd = (formValues: any) => {
    setGroups([
      ...groups,
      { ...formValues, id: uuid(), createdDate: new Date() },
    ]);
    setGroupForm({ formType: undefined, showForm: false });
  };

  return (
    <React.Fragment>
      {!groupForm.showForm ? (
        <React.Fragment>
          <button
            onClick={() => setGroupForm({ formType: "add", showForm: true })}
            className="add-action"
          >
            Add Group
          </button>
          <table className="list">
            <thead>
              <tr>
                <th className="list-item">Id</th>
                <th className="list-item">Name</th>
                <th className="list-item">Description</th>
                <th className="list-item">created Date</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((item, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="list-item">{item.id}</td>
                    <td className="list-item">{item.name}</td>
                    <td className="list-item">{item.description}</td>
                    <td className="list-item">{item.createdDate.toString()}</td>
                    <td className="list-item">
                      <button
                        onClick={() => {
                          setGroupForm({
                            data: item,
                            formType: "edit",
                            showForm: true,
                          });
                        }}
                        className="edit-action"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(item.id)}
                        className="delete-action"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ) : (
        <GroupForm
          onSubmit={groupForm?.formType === "add" ? onAdd : onEdit}
          onCancel={() =>
            setGroupForm({
              formType: undefined,
              data: undefined,
              showForm: false,
            })
          }
          formHeader={
            groupForm?.formType === "add" ? "Add Group" : "Edit Group"
          }
          data={groupForm?.data}
        />
      )}
    </React.Fragment>
  );
};
