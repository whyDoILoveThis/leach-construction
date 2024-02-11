import PropTypes from "prop-types";

const JobTypes = ({ formDataType, handleChange }) => {
  JobTypes.propTypes = {
    formDataType: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  return (
    <div>
      <div className="flex gap-6">
        <div>
          <label className="pl-4 font-bold">Job&nbsp;Type:</label>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-6">
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Bathroom"
                  checked={formDataType === "Bathroom"}
                  onChange={handleChange}
                />
                Bathroom
              </label>
            </div>
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Floor"
                  checked={formDataType === "Floor"}
                  onChange={handleChange}
                />
                Floor
              </label>
            </div>
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Porch"
                  checked={formDataType === "Porch"}
                  onChange={handleChange}
                />
                Porch
              </label>
            </div>
          </div>
          <div className="flex gap-6">
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Remodel"
                  checked={formDataType === "Remodel"}
                  onChange={handleChange}
                />
                Remodel
              </label>
            </div>
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Roof"
                  checked={formDataType === "Roof"}
                  onChange={handleChange}
                />
                Roof
              </label>
            </div>
            <div>
              <label className="flex">
                <input
                  type="radio"
                  name="type"
                  value="Addition"
                  checked={formDataType === "Addition"}
                  onChange={handleChange}
                />
                Addition
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTypes;
