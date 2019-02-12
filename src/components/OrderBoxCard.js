import React from "react";

const OrderBoxCard = () => (
  <div className="boxCard">
    <div className="boxCard-header">Name</div>
    <div className="boxCard-body">
      <div className="banner">
        <p>Image Properties</p>
      </div>
      <div className="settings">
        <div className="menuItem">
          <p className="no_margin">Use pictures for:</p>
          <div className="selectWrapper">
            <select
              className="selectBox selectBoxPicType"
              name="type"
              id="picType"
            >
              <option>
                To be converted / Adobe RGB / Digital use, 300 dpi / JPG
              </option>
              <option>
                To be converted / Adobe RGB / Digital use, 300 dpi / EPS
              </option>
              <option>
                To be converted / Adobe RGB / Digital use, 300 dpi / PNG
              </option>
            </select>
          </div>
        </div>
        <div className="menuItem">
          <p>Unit type:</p>
          <div className="selectWrapper">
            <select
              className="selectBox selectBoxUnitType"
              name="type"
              id="unitType"
            >
              <option>cm</option>
              <option>inch</option>
              <option>pica</option>
              <option>point</option>
              <option>px</option>
            </select>
          </div>
        </div>
      </div>

      <div className="img_placeholder">
        <div className="selected_image">
          <div className="imgBox">
            <div className="image-container">
              <img
                src="assets/img/pics/checkout_img_1.png"
                alt="checkout_img"
              />
              <div className="assetItem">
                <p className="assetId">PH153618</p>
              </div>
            </div>
          </div>

          <div className="imgConfig">
            <div className="imgInfo">
              <p>Clipping Path:</p>
              <p>Size:</p>
              <p>Dimension:</p>
            </div>
            <div className="imgSettings">
              <div className="clipSetting">
                <div className="selectWrapper">
                  <select
                    className="selectBox selectBoxUnitType"
                    name="type"
                    id="clipType2"
                  >
                    <option>none</option>
                  </select>
                </div>
              </div>
              <div className="sizeSetting">
                <input
                  type="range"
                  name="range"
                  id="range1"
                  min="0"
                  max="100"
                  step="5"
                  value="40"
                />
                <output className="output1" />
              </div>
              <div className="dimSetting">
                <p>Width: 6130.00 Height: 4895.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="selected_image">
          <div className="imgBox">
            <img src="assets/img/pics/checkout_img_1.png" alt="checkout_img1" />
            <p>PH153618</p>
          </div>

          <div className="imgConfig">
            <div className="imgInfo">
              <p>Clipping Path:</p>
              <p>Size:</p>
              <p>Dimension:</p>
            </div>
            <div className="imgSettings">
              <div className="clipSetting">
                <div className="selectWrapper">
                  <select
                    className="selectBox selectBoxUnitType"
                    name="type"
                    id="clipType3"
                  >
                    <option>none</option>
                  </select>
                </div>
              </div>
              <div className="sizeSetting">
                <input
                  type="range"
                  name="range"
                  id="range2"
                  min="0"
                  max="100"
                  step="5"
                  value="40"
                />

                <output className="output2" />
              </div>
              <div className="dimSetting">
                <p>Width: 6130.00 Height: 4895.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="selected_image">
          <div className="imgBox">
            <img src="assets/img/pics/checkout_img_1.png" alt="checkout_img2" />
            <p>PH153618</p>
          </div>

          <div className="imgConfig">
            <div className="imgInfo">
              <p>Clipping Path:</p>
              <p>Size:</p>
              <p>Dimension:</p>
            </div>
            <div className="imgSettings">
              <div className="clipSetting">
                <div className="selectWrapper">
                  <select
                    className="selectBox selectBoxUnitType"
                    name="type"
                    id="clipType"
                  >
                    <option>none</option>
                  </select>
                </div>
              </div>
              <div className="sizeSetting">
                <input
                  type="range"
                  name="range"
                  id="range3"
                  min="0"
                  max="100"
                  step="5"
                  value="40"
                />

                <output className="output3" />
              </div>
              <div className="dimSetting">
                <p>Width: 6130.00 Height: 4895.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="boxCard-footer">
      <div className="banner">
        <p>Delivery address</p>
      </div>
      <div className="orderButton">Proceed with order</div>
    </div>
  </div>
);

export default OrderBoxCard;
