import PropTypes from "prop-types";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const AddMember = ({ control, getValues, setValue }) => {
  // ==== Members section add user logic ====

  const userLimit = 10;
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");
  const [emails, setEmails] = useState(getValues("emails") || []);
  const [error, setError] = useState("");

  const handleAddEmail = (event) => {
    event?.preventDefault();
    const currentEmails = getValues("emails");

    if (tags.length === 0) {
      setError("You need to add a user.");
      return;
    }

    if (tags.length > 0 && currentEmails.length + tags.length <= userLimit) {
      const updatedEmails = [...currentEmails, ...tags];
      setEmails(updatedEmails);
      setValue("emails", updatedEmails);
      setTags([]);
      setTagValue("");
    } else {
      setError(`You cannot add more than ${userLimit} users.`);
    }
  };

  const handleDeleteEmail = (emailDelete) => {
    const updatedEmails = emails.filter((email) => email !== emailDelete);
    setEmails(updatedEmails);
    setValue("emails", updatedEmails);
  };

  const handleAddTag = (event) => {
    const invalidChars = /[^a-zA-Z0-9@.]/;

    if ((event.keyCode === 32 || event.keyCode === 13) && tagValue.trim()) {
      event.preventDefault();
      setError("");

      const newTags = tagValue.trim().split(" ").filter(Boolean);
      const currentEmails = getValues("emails");

      newTags.forEach((tag) => {
        const emailExists = currentEmails.includes(tag) || tags.includes(tag);
        const isValidEmail = tag.endsWith("@gmail.com");
        const containsInvalidChar = invalidChars.test(tag);
        const withinUserLimit =
          tags.length < userLimit &&
          currentEmails.length + newTags.length <= userLimit;

        switch (true) {
          case emailExists:
            setError(`User "${tag}" has already been added.`);
            break;

          case containsInvalidChar:
            setError(
              `"${tag}" contains special characters that are not allowed in email addresses.`
            );
            break;

          case !isValidEmail:
            setError(
              `"${tag}" is not a valid Gmail address. Must end with @gmail.com.`
            );
            break;

          case withinUserLimit:
            setTags([...tags, ...newTags]);
            setTagValue("");
            setError("");
            break;

          default:
            setError(`User limit of ${userLimit} reached.`);
            break;
        }
      });
    } else if (event.keyCode === 13 && tagValue === "") {
      handleAddEmail(event);
    }
  };

  const handleDelTag = (val, e) => {
    e.preventDefault();
    let deleteTag = tags.filter((item) => item !== val);
    setTags(deleteTag);
    setError("");
  };
  return (
    <div className="members p-5 flex-container flex-column gap-6">
      <div className="members-header">
        <p>
          The maximum number of team members you can invite is 5, and each user
          can be assigned a specific level of access. Only the <br />
          account admin can edit plans, view billing details, and delete
          accounts.
        </p>
      </div>

      <div className="members-user-count flex-container gap-2">
        <p>User limit:</p> <span>{`${emails.length}/${userLimit}`}</span>
      </div>

      <div className="members-user-add">
        <form className="form-group">
          <p>Add new user</p>
          <div className=" flex-container gap-4">
            <Controller
              name="emails"
              control={control}
              render={() => (
                <div className="tagInput form-control row gap-1">
                  {tags.map((item, index) => (
                    <button
                      className="emails"
                      key={index}
                      onClick={(e) => handleDelTag(item, e)}
                    >
                      <img src="" alt="" />
                      {item}
                      <IoClose />
                    </button>
                  ))}
                  <input
                    type="text"
                    value={tagValue}
                    onChange={(e) => {
                      setTagValue(e.target.value);
                      setError("");
                    }}
                    onKeyDown={handleAddTag}
                    style={{
                      borderColor: error ? "#d9534f" : "#767676",
                    }}
                  />
                </div>
              )}
            />
            <Link>
              <button
                type="button"
                className="btn bg-primary text-natural"
                onClick={handleAddEmail}
                disabled={emails.length >= userLimit}
              >
                Add user
              </button>
            </Link>
          </div>
          {error && (
            <div className="error-message">
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>

      <div className="members-user-list">
        <p>Account users</p>
        <table className="flex-container flex-column gap-3">
          <thead>
            <tr className="row">
              <th className="col-8">Email</th>
              <th className="col-4">Role</th>
            </tr>
          </thead>
          <tbody className="flex-container flex-column gap-3">
            {getValues("emails").map((email, index) => (
              <tr className="row" key={index}>
                <td className="col-8">
                  <img src="" alt="" />
                  <span>{email}</span>
                </td>
                <td className="col-4">
                  <button
                    className="btn bg-primary text-natural"
                    onClick={() => handleDeleteEmail(email)}
                  >
                    Remove user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AddMember.propTypes = {
  getValues: PropTypes.func,
  setValue: PropTypes.func,
  control: PropTypes.func,
};
