import { useState } from "react";
import { DownIcon } from "../../assets";
import { useDisplay } from "../../contexts/DisplayContext";
import "./Dropdown.css";
import groupBy from "../../config/groupBy";
import useFetchApi from "../../config/useFetchApi";

export default function ComponentName({ children }) {
  const { data } = useFetchApi(); // improve this repetitive api call
  const [modal, setModal] = useState(false);
  const { display, setDisplay } = useDisplay();

  return (
    <>
      <button
        type="button"
        onClick={() => setModal((prev) => !prev)}
        className="dropdown">
        {children}
        <img src={DownIcon} alt="Down Icon" />
      </button>

      {modal && (
        <div className="dropdown-modal">
          <div className="display-form">
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={display.group}
              onChange={(e) => {
                setDisplay((prev) => ({ ...prev, group: e.target.value }));
                setModal((prev) => !prev);
                groupBy(data, display.group);
              }}>
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="users">User</option>
            </select>

            <label htmlFor="ordering">Ordering</label>
            <select
              id="ordering"
              value={display.order}
              onChange={(e) => {
                setDisplay((prev) => ({ ...prev, order: e.target.value }));
                setModal((prev) => !prev);
                groupBy(data.tickets, display.order);
              }}>
              <option value="priority">Priority</option>
              <option value="sort">Sort</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
