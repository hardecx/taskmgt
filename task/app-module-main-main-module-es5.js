(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-module-main-main-module"], {
    /***/
    "2isk":
    /*!***************************************************!*\
      !*** ./src/app/@component/task/task.component.ts ***!
      \***************************************************/

    /*! exports provided: TaskComponent */

    /***/
    function isk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var src_app_component_back_back_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/@component/back/back.component */
      "4OrQ");
      /* harmony import */


      var src_app_component_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@component/errors/errors.component */
      "OWP3");
      /* harmony import */


      var src_app_component_success_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/@component/success/success.component */
      "8KZ7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function TaskComponent_textarea_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 25);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.submitted && ctx_r0.T.ActionItem.errors));
        }
      }

      function TaskComponent_input_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 26);
        }
      }

      function TaskComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Action Item. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_10_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.T.ActionItem.errors.required);
        }
      }

      function TaskComponent_select_15_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r23.ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r23.TaskTypeName, " ");
        }
      }

      function TaskComponent_select_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_select_15_Template_select_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_select_15_option_3_Template, 2, 2, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Choose Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.TaskType);
        }
      }

      function TaskComponent_input_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 33);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.array.TaskTypeName);
        }
      }

      function TaskComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Task Type. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_17_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.T.TaskType.errors.required);
        }
      }

      function TaskComponent_div_18_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Task Description. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_18_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_18_div_4_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.T.TaskDescription.errors.required);
        }
      }

      function TaskComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Task Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_div_18_div_4_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.submitted && ctx_r6.T.TaskDescription.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ctx_r6.T.TaskDescription.errors);
        }
      }

      function TaskComponent_input_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 35);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r7.submitted && ctx_r7.T.StartDate.errors));
        }
      }

      function TaskComponent_input_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 36);
        }
      }

      function TaskComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Start Date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_24_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.T.StartDate.errors.required);
        }
      }

      function TaskComponent_input_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 37);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r10.submitted && ctx_r10.T.EndDate.errors));
        }
      }

      function TaskComponent_input_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 38);
        }
      }

      function TaskComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a End Date. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_30_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.T.EndDate.errors.required);
        }
      }

      function TaskComponent_select_34_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r32.EmployeeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r32.EmployeeName, " ");
        }
      }

      function TaskComponent_select_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_select_34_Template_select_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onChange1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_select_34_option_3_Template, 2, 2, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Choose Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.Employee);
        }
      }

      function TaskComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 33);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r14.array.ResponsibleOwnerName);
        }
      }

      function TaskComponent_div_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Responsible Owner. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_36_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.T.ResponsibleOwnerName.errors.required);
        }
      }

      function TaskComponent_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Department. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_41_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.T.Department.errors.required);
        }
      }

      function TaskComponent_div_46_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Department HOD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_46_div_1_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.T.DepartmentHOD.errors.required);
        }
      }

      function TaskComponent_button_47_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_button_47_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_button_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_47_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.createTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_button_47_div_1_Template, 2, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_button_47_span_2_Template, 2, 0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.loading);
        }
      }

      function TaskComponent_button_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_48_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_form_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ongoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_49_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.approveTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.complete);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Choose Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Ongoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Completed");
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(router, _fb, api, route) {
          _classCallCheck(this, TaskComponent);

          this.router = router;
          this._fb = _fb;
          this.api = api;
          this.route = route;
          this.approve = false;
          this.create = false;
          this.edit = false;
          this.showpage = false;
          this.TaskDes = false;
          this.submitted = false;
          this.task = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.complete = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.TaskType = [];
          this.Employee = [];
          this.item = [];
          this.loading = false;
          this.success = "";
          this.error = '';
        }

        _createClass(TaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.complete = this._fb.group({
              TaskID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              Comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.task = this._fb.group({
              ActionItem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              EndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              TaskType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              TaskDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              ResponsibleOwnerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              Department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              DepartmentHOD: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              ResponsibleOwnerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });

            if (this.apis !== "0") {
              this.route.paramMap.forEach(function (params) {
                var value = params.params;
                _this.apis = value['id'];
                _this.name = value['name'];

                if (_this.name == "update") {
                  _this.edit = true;

                  _this.api.read(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].TaskType, {}).subscribe(function (res) {
                    console.log(res.records);
                    _this.TaskType = res.records;
                  }, function (err) {
                    _this.error = err.message;
                  });

                  _this.api.employee(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task).subscribe(function (res) {
                    _this.Employee = res.records;
                    console.log(_this.Employee);
                    _this.showpage = true;
                  }, function (err) {});
                }

                if (_this.name == "input") {
                  _this.approve = true;
                }

                if (_this.name == "create") {
                  _this.create = true;

                  _this.api.read(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].TaskType, {}).subscribe(function (res) {
                    console.log(res.records);
                    _this.TaskType = res.records;
                  }, function (err) {
                    _this.error = err.message;
                  });

                  _this.api.employee(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task).subscribe(function (res) {
                    _this.Employee = res.records;
                    console.log(_this.Employee);
                    _this.showpage = true;
                  }, function (err) {});
                }

                if (_this.apis !== "0") {
                  _this.api.read_one(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task, {
                    TaskID: _this.apis
                  }).subscribe(function (res) {
                    _this.array = res.records[0];
                    _this.id = _this.array.AccountID;
                    _this.task = _this._fb.group({
                      TaskID: [_this.array.TaskID, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      ActionItem: [_this.array.ActionItem, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      StartDate: [_this.array.StartDate.replace(' ', 'T'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      EndDate: [_this.array.EndDate.replace(' ', 'T'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      TaskType: [_this.array.TaskType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      TaskTypeName: [_this.array.TaskTypeName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      TaskDescription: [_this.array.TaskDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      ResponsibleOwnerName: [_this.array.ResponsibleOwnerName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      Department: [_this.array.Department, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      DepartmentHOD: [_this.array.DepartmentHOD, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                      ResponsibleOwnerEmail: [_this.array.ResponsibleOwnerEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                    });
                    _this.success = res.message; // setTimeout(() => {
                    //   this.success = "";
                    //   this.router.navigateByUrl('main/Account');
                    // }, 2000)
                  }, function (err) {
                    _this.loading = false;

                    if (err.status === 0 && err.error instanceof ProgressEvent) {
                      // A client-side or network error occurred. Handle it accordingly.
                      _this.error = 'Client side error:Please check your internet';
                    } else {
                      _this.error = err.message;
                    }

                    setTimeout(function () {
                      _this.error = "";
                    }, 2000);
                  });
                }
              });
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(el) {
            if (el) {
              el.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
          }
        }, {
          key: "scrollToError",
          value: function scrollToError() {
            var firstElementWithError = document.querySelector(".ng-invalid[formControlName]");
            this.scrollTo(firstElementWithError);
          }
        }, {
          key: "T",
          get: function get() {
            return this.task.controls;
          } // get C() {
          //   return this.complete.controls;
          // }

        }, {
          key: "createTask",
          value: function createTask() {
            this.submitted = true;

            if (this.task.invalid) {
              this.scrollToError();
            } else {
              this.submitted = false;
              this.creat();
            }
          }
        }, {
          key: "creat",
          value: function creat() {
            var _this2 = this;

            this.loading = true;
            this.task.disable();
            console.log(Object.assign({}, this.task.value));
            this.api.create(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task, Object.assign(Object.assign({}, this.task.value), {
              TaskType: this.TaskID
            })).subscribe(function (res) {
              _this2.loading = false;

              _this2.task.reset();

              _this2.success = res.message;

              _this2.router.navigateByUrl('main/taskupdate');

              setTimeout(function () {
                _this2.success = ""; // this.router.navigateByUrl('main/sales');
              }, 2000);
            }, function (err) {
              _this2.task.enable();

              _this2.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this2.error = 'Client side error:Please check your internet';
              } else {
                _this2.error = err.message;
              }

              setTimeout(function () {
                _this2.error = "";
              }, 2000);
            });
          }
        }, {
          key: "selectedType",
          value: function selectedType(value) {
            console.log(value);
            console.log("the selected value is " + value.ID);
          }
        }, {
          key: "onChange",
          value: function onChange() {
            var _this3 = this;

            var _a, _b;

            var value = this.TaskType.find(function (x) {
              return x.ID === _this3.task.value.TaskType;
            });
            console.log(value);
            this.TaskDescription = value.Description;
            (_a = this.task.get("TaskDescription")) === null || _a === void 0 ? void 0 : _a.setValue(this.TaskDescription);
            this.TaskID = this.task.value.TaskType;
            this.TaskName = value.TaskTypeName;

            if (this.TaskName === "Others") {
              (_b = this.task.get("TaskDescription")) === null || _b === void 0 ? void 0 : _b.setValue("");
              this.TaskDes = true;
            } else {
              this.TaskDes = false;
            }
          }
        }, {
          key: "onChange1",
          value: function onChange1() {
            var _this4 = this;

            var _a, _b, _c; //item.Department+'-'+item.DepartmentHead+'-'+item.Email+'-'+item.EmployeeName


            var value = this.Employee.find(function (x) {
              return x.EmployeeName === _this4.task.value.ResponsibleOwnerName;
            });
            console.log(value);
            (_a = this.task.get("DepartmentHOD")) === null || _a === void 0 ? void 0 : _a.setValue(value.DepartmentHead);
            (_b = this.task.get("Department")) === null || _b === void 0 ? void 0 : _b.setValue(value.Department);
            (_c = this.task.get("ResponsibleOwnerEmail")) === null || _c === void 0 ? void 0 : _c.setValue(value.Email);
          }
        }, {
          key: "update",
          value: function update() {
            var _this5 = this;

            this.loading = true;
            this.task.disable();
            this.api.update(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task, Object.assign(Object.assign({}, this.task.value), {
              EndDate: this.task.value.EndDate.replace('T', ' '),
              StartDate: this.task.value.StartDate.replace('T', ' ')
            })).subscribe(function (res) {
              _this5.loading = false;

              _this5.task.reset();

              _this5.success = res.message;

              _this5.router.navigateByUrl('main/taskupdate');

              setTimeout(function () {
                _this5.success = "";
              }, 2000);
            }, function (err) {
              _this5.task.enable();

              _this5.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this5.error = 'Client side error:Please check your internet';
              } else {
                _this5.error = err.message;
              }

              setTimeout(function () {
                _this5.error = "";
              }, 2000);
            });
          }
        }, {
          key: "approved",
          value: function approved() {
            var _this6 = this;

            this.complete.disable();
            this.api.completetask(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"].Task, this.complete.value).subscribe(function (res) {
              _this6.complete.reset();

              _this6.success = res.message;

              _this6.router.navigateByUrl('main/table');

              setTimeout(function () {
                _this6.success = "";
              }, 2000);
            }, function (err) {
              _this6.complete.enable();

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this6.error = 'Client side error:Please check your internet';
              } else {
                _this6.error = err.message;
              }

              setTimeout(function () {
                _this6.error = "";
              }, 2000);
            });
          }
        }, {
          key: "approveTask",
          value: function approveTask() {
            var _a;

            (_a = this.complete.get("TaskID")) === null || _a === void 0 ? void 0 : _a.setValue(this.array.TaskID);
            console.log(this.complete.value);

            if (this.complete.value.Comment === "") {
              this.error = "Please add comment";
            } else {
              this.submitted = false;
              this.approved();
            }
          }
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        decls: 50,
        vars: 30,
        consts: [[3, "error"], [3, "success"], [1, "form", "p-3", 3, "formGroup"], [1, "form-row", "m-4"], [1, "col-lg-12", "col-sm-12"], ["for", "inputLastName", 1, "label"], ["class", "form-control rounded-0", "id", "exampleFormControlTextarea2", "formControlName", "ActionItem", 3, "ngClass", 4, "ngIf"], ["class", "form-control", "type", "text", "formControlName", "ActionItem", "readonly", "", 4, "ngIf"], ["class", "invalid-feedback mb-1", 4, "ngIf"], [1, "col-lg-4", "col-sm-12"], ["for", "inputEmail", 1, "label"], [1, "form-group"], ["formControlName", "TaskType", "class", "form-control", 3, "change", 4, "ngIf"], ["class", "form-control", "type", "text", "readonly", "", 3, "value", 4, "ngIf"], ["class", "col-lg-4 col-sm-12", 4, "ngIf"], ["class", "form-control", "type", "datetime-local", "formControlName", "StartDate", 3, "ngClass", 4, "ngIf"], ["class", "form-control", "type", "datetime-local", "formControlName", "StartDate", "readonly", "", 4, "ngIf"], ["class", "form-control", "type", "datetime-local", "formControlName", "EndDate", 3, "ngClass", 4, "ngIf"], ["class", "form-control", "type", "datetime-local", "formControlName", "EndDate", "readonly", "", 4, "ngIf"], ["formControlName", "ResponsibleOwnerName", "class", "form-control", 3, "change", 4, "ngIf"], ["type", "text", "readonly", "", "formControlName", "Department", 1, "form-control", 3, "ngClass"], ["id", "exampleFormControlTextarea2", "readonly", "", "formControlName", "DepartmentHOD", 1, "form-control", "rounded-0", 3, "ngClass"], ["type", "button", "class", "btn btn-success m-4", 3, "click", 4, "ngIf"], ["style", "margin-left: 40px;", "type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "form p-3", 3, "formGroup", 4, "ngIf"], ["id", "exampleFormControlTextarea2", "formControlName", "ActionItem", 1, "form-control", "rounded-0", 3, "ngClass"], ["type", "text", "formControlName", "ActionItem", "readonly", "", 1, "form-control"], [1, "invalid-feedback", "mb-1"], [4, "ngIf"], ["formControlName", "TaskType", 1, "form-control", 3, "change"], ["selected", "true", "disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "TaskDescription", 1, "form-control", 3, "ngClass"], ["type", "datetime-local", "formControlName", "StartDate", 1, "form-control", 3, "ngClass"], ["type", "datetime-local", "formControlName", "StartDate", "readonly", "", 1, "form-control"], ["type", "datetime-local", "formControlName", "EndDate", 1, "form-control", 3, "ngClass"], ["type", "datetime-local", "formControlName", "EndDate", "readonly", "", 1, "form-control"], ["formControlName", "ResponsibleOwnerName", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-success", "m-4", 3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-success", 2, "margin-left", "40px", 3, "click"], [1, "row", "m-4"], ["formControlName", "Status", 1, "form-control"], [1, "col-md-6"], ["id", "exampleFormControlTextarea2", "formControlName", "Comment", 1, "form-control", "rounded-0"], ["type", "button", 1, "btn", "btn-success", 2, "margin-left", "30px", 3, "click"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-errors", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-success", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Action Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskComponent_textarea_8_Template, 1, 3, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskComponent_input_9_Template, 1, 0, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskComponent_div_10_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Task Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskComponent_select_15_Template, 4, 2, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskComponent_input_16_Template, 1, 1, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskComponent_div_17_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskComponent_div_18_Template, 5, 4, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskComponent_input_22_Template, 1, 3, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskComponent_input_23_Template, 1, 0, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TaskComponent_div_24_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TaskComponent_input_28_Template, 1, 3, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TaskComponent_input_29_Template, 1, 0, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaskComponent_div_30_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Responsible Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TaskComponent_select_34_Template, 4, 2, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TaskComponent_input_35_Template, 1, 1, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TaskComponent_div_36_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TaskComponent_div_41_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Department HOD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TaskComponent_div_46_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TaskComponent_button_47_Template, 3, 2, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskComponent_button_48_Template, 3, 0, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TaskComponent_form_49_Template, 20, 4, "form", 24);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("success", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.task);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit || ctx.create);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.ActionItem.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create || ctx.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.TaskType.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.TaskDes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create || ctx.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.StartDate.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create || ctx.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.EndDate.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create || ctx.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.ResponsibleOwnerName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.T.Department.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.Department.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.T.DepartmentHOD.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.T.DepartmentHOD.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.create);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approve);
          }
        },
        directives: [src_app_component_back_back_component__WEBPACK_IMPORTED_MODULE_5__["BackComponent"], src_app_component_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__["ErrorsComponent"], src_app_component_success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7e0V":
    /*!*****************************************************!*\
      !*** ./src/app/@component/other/other.component.ts ***!
      \*****************************************************/

    /*! exports provided: OtherComponent */

    /***/
    function e0V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherComponent", function () {
        return OtherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function OtherComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
        }
      }

      function OtherComponent_tsktable_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r1.baseItems)("caption", "Other meetings")("settings", ctx_r1.projectSettings)("searchText", ctx_r1.searchText)("loading", ctx_r1.loading)("sn", true)("api", ctx_r1.apis);
        }
      }

      function OtherComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherComponent_div_3_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("item");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
        }
      }

      var OtherComponent = /*#__PURE__*/function (_base_base_component_) {
        _inherits(OtherComponent, _base_base_component_);

        var _super = _createSuper(OtherComponent);

        function OtherComponent(api, enums, router) {
          var _this7;

          _classCallCheck(this, OtherComponent);

          _this7 = _super.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          _this7.api = api;
          _this7.enums = enums;
          _this7.router = router; // routePage ="../edit";

          _this7.apis = 'customer';
          _this7.projectSettings = [{
            primaryKey: "TaskID",
            header: "Task ID",
            routerParams: true
          }, {
            primaryKey: "ActionItem",
            header: "ActionItem"
          }, {
            primaryKey: "TaskTypeName",
            header: "Task Type"
          }, {
            primaryKey: "TaskDescription",
            header: "Task Description"
          }, {
            primaryKey: "StartDate",
            header: "Start Date"
          }, {
            primaryKey: "EndDate",
            header: "End Date"
          }, {
            primaryKey: "ResponsibleOwnerName",
            header: "Responsible Owner"
          }, {
            primaryKey: "Department",
            header: "Department"
          }, {
            primaryKey: "DepartmentHOD",
            header: "DepartmentHOD"
          }, {
            primaryKey: "Status",
            header: "Status"
          }];
          return _this7;
        }

        _createClass(OtherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readtasktype(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task, {
              "TaskType": "Others"
            });
          }
        }]);

        return OtherComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      OtherComponent.ɵfac = function OtherComponent_Factory(t) {
        return new (t || OtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      OtherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OtherComponent,
        selectors: [["app-other"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 3, "click"]],
        template: function OtherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OtherComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherComponent_tsktable_1_Template, 1, 7, "tsktable", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OtherComponent_div_3_Template, 4, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-other',
            templateUrl: './other.component.html',
            styleUrls: ['./other.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ax6E":
    /*!*************************************************!*\
      !*** ./src/app/@component/mpr/mpr.component.ts ***!
      \*************************************************/

    /*! exports provided: MprComponent */

    /***/
    function Ax6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MprComponent", function () {
        return MprComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function MprComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
        }
      }

      function MprComponent_tsktable_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r1.baseItems)("caption", "Monthly Performance Review")("settings", ctx_r1.projectSettings)("searchText", ctx_r1.searchText)("loading", ctx_r1.loading)("sn", true)("api", ctx_r1.apis);
        }
      }

      function MprComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MprComponent_div_3_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("item");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
        }
      }

      var MprComponent = /*#__PURE__*/function (_base_base_component_2) {
        _inherits(MprComponent, _base_base_component_2);

        var _super2 = _createSuper(MprComponent);

        function MprComponent(api, enums, router) {
          var _this8;

          _classCallCheck(this, MprComponent);

          _this8 = _super2.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          _this8.api = api;
          _this8.enums = enums;
          _this8.router = router; // routePage ="../edit";

          _this8.apis = 'customer';
          _this8.projectSettings = [{
            primaryKey: "TaskID",
            header: "Task ID",
            routerParams: true
          }, {
            primaryKey: "ActionItem",
            header: "ActionItem"
          }, {
            primaryKey: "TaskTypeName",
            header: "Task Type"
          }, {
            primaryKey: "TaskDescription",
            header: "Task Description"
          }, {
            primaryKey: "StartDate",
            header: "Start Date"
          }, {
            primaryKey: "EndDate",
            header: "End Date"
          }, {
            primaryKey: "ResponsibleOwnerName",
            header: "Responsible Owner"
          }, {
            primaryKey: "Department",
            header: "Department"
          }, {
            primaryKey: "DepartmentHOD",
            header: "DepartmentHOD"
          }, {
            primaryKey: "Status",
            header: "Status"
          }];
          return _this8;
        }

        _createClass(MprComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readtasktype(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task, {
              "TaskType": "MPR"
            });
          }
        }]);

        return MprComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      MprComponent.ɵfac = function MprComponent_Factory(t) {
        return new (t || MprComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      MprComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MprComponent,
        selectors: [["app-mpr"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 3, "click"]],
        template: function MprComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MprComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MprComponent_tsktable_1_Template, 1, 7, "tsktable", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MprComponent_div_3_Template, 4, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcHIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MprComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mpr',
            templateUrl: './mpr.component.html',
            styleUrls: ['./mpr.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Fk01":
    /*!*************************************************************!*\
      !*** ./src/app/@component/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Fk01(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function DashboardComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-invent");
        }
      }

      function DashboardComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-invents");
        }
      }

      var DashboardComponent = function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.active = 1;
      };

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 11,
        vars: 4,
        consts: [["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function DashboardComponent_Template_ul_activeIdChange_0_listener($event) {
              return ctx.active = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inventory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_ng_template_9_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "IiGU":
    /*!*****************************************!*\
      !*** ./src/app/@service/interceptor.ts ***!
      \*****************************************/

    /*! exports provided: InterceptorServices */

    /***/
    function IiGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterceptorServices", function () {
        return InterceptorServices;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InterceptorServices = /*#__PURE__*/function () {
        function InterceptorServices() {
          _classCallCheck(this, InterceptorServices);
        }

        _createClass(InterceptorServices, [{
          key: "intercept",
          value: function intercept(request, next) {
            var idToken = localStorage.getItem('token');
            var customReq = request.clone({
              headers: request.headers.set("Authorization", " Bearer " + idToken)
            });
            return next.handle(customReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
              if (error.status === 401 || error.status === 403) {
                window.location.href = "/task";
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            })); //   .subscribe((res)=>{
            //   },err => {
            //     // onError
            //
            //     if (err instanceof HttpErrorResponse) {
            //
            //         if (err.status === 401) {
            //             window.location.href = "/login";
            //         }
            //     }
            //     return throwError(err);
            // }) as any;;
          }
        }]);

        return InterceptorServices;
      }();

      InterceptorServices.ɵfac = function InterceptorServices_Factory(t) {
        return new (t || InterceptorServices)();
      };

      InterceptorServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InterceptorServices,
        factory: InterceptorServices.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorServices, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ju10":
    /*!***************************************************!*\
      !*** ./src/app/@component/edit/edit.component.ts ***!
      \***************************************************/

    /*! exports provided: EditComponent */

    /***/
    function Ju10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_edit_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/edit-textbox */
      "kTee");
      /* harmony import */


      var src_app_models_edit_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/edit-dropdown */
      "K2lX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_control_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@service/control.service */
      "Tn30");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var src_app_component_back_back_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/@component/back/back.component */
      "4OrQ");
      /* harmony import */


      var src_app_component_success_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/@component/success/success.component */
      "8KZ7");
      /* harmony import */


      var src_app_component_errors_errors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/@component/errors/errors.component */
      "OWP3");
      /* harmony import */


      var src_app_template_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/@template/loader/loader.component */
      "1Fjx");
      /* harmony import */


      var src_app_component_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/@component/dynamic-form/dynamic-form.component */
      "tV5l");

      function EditComponent_app_loader_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      function EditComponent_div_8_form_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-question", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var question_r8 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", question_r8)("form", ctx_r3.form);
        }
      }

      function EditComponent_div_8_form_1_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.form.valid);
        }
      }

      function EditComponent_div_8_form_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditComponent_div_8_form_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_8_form_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditComponent_div_8_form_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditComponent_div_8_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditComponent_div_8_form_1_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditComponent_div_8_form_1_div_2_Template, 2, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditComponent_div_8_form_1_button_5_Template, 2, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditComponent_div_8_form_1_div_6_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditComponent_div_8_form_1_button_8_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditComponent_div_8_form_1_div_9_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.questions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loading2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loading3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading3);
        }
      }

      function EditComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditComponent_div_8_form_1_Template, 11, 6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.questions);
        }
      }

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(location, router, route, qcs, api) {
          _classCallCheck(this, EditComponent);

          this.location = location;
          this.router = router;
          this.route = route;
          this.qcs = qcs;
          this.api = api;
          this.questions = [];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
          this.error = "";
          this.loading2 = false;
          this.loading3 = false;
          this.payLoad = '';
          this.loading = false;
        }

        _createClass(EditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //  this.form = this.qcs.toFormGroup(this.questions);
            this.routes();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.loading2 = true;
            this.payLoad = JSON.stringify(this.form.getRawValue());
            this.api.update(this.apis, this.form.getRawValue()).subscribe(function (res) {
              _this9.loading2 = false;

              _this9.getValues();

              _this9.success = res.message; //this._router.navigateByUrl('main');

              setTimeout(function () {
                _this9.success = "";
              }, 2000);
            }, function (err) {
              _this9.loading2 = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this9.error = 'Client side error:Please check your internet';
              } else {
                _this9.error = err.message;
              }

              setTimeout(function () {
                _this9.error = "";
              }, 2000);
            });
          }
        }, {
          key: "routes",
          value: function routes() {
            var _this10 = this;

            this.route.paramMap.forEach(function (params) {
              var value = params.params;
              _this10.id = value['id'];
              _this10.apis = value['api'];
              _this10.value = value['value'];

              _this10.getValues();
            });
          }
        }, {
          key: "getValues",
          value: function getValues() {
            var _this11 = this;

            var index = 1;
            this.loading = true;
            this.error = "";
            var value;
            this.questions = [];
            var questions = [];
            this.api.read_one(this.apis, _defineProperty({}, this.value, this.id)).subscribe(function (res) {
              if (res['records'][0]) {
                value = res['records'][0];
              } else {
                value = res;
              }

              for (var _i = 0, _Object$keys = Object.keys(value); _i < _Object$keys.length; _i++) {
                var key = _Object$keys[_i];

                if (key !== 'DateCreated' && key != 'Status') {
                  _this11.questions.push(new src_app_models_edit_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                    key: key,
                    label: key,
                    controlType: 'textbox',
                    order: index,
                    value: value[key],
                    required: true
                  }));

                  index++;
                } else {
                  if (key !== 'DateCreated' && key == 'Status') {
                    _this11.questions.push(new src_app_models_edit_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownQuestion"]({
                      key: key,
                      label: 'Status',
                      value: value[key],
                      options: [{
                        key: 'Active',
                        value: 'Active'
                      }, {
                        key: 'Inactive',
                        value: 'Inactive'
                      }],
                      order: index
                    }));
                  }
                } //this.myform


                _this11.loading = false;
                _this11.form = _this11.qcs.toFormGroup(_this11.questions);
              }
            }, function (err) {
              _this11.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this11.error = 'Client side error:Please check your internet';
              } else {
                _this11.error = err.error.message;
              }
            });
          }
        }, {
          key: "remove",
          value: function remove() {
            var _this12 = this;

            this.loading3 = true;
            this.api["delete"](this.apis, _defineProperty({}, this.value, this.id)).subscribe(function (res) {
              _this12.loading3 = false;
              _this12.success = res.message;

              _this12.router.navigateByUrl('main/item');

              setTimeout(function () {
                _this12.success = "";
              }, 2000);
            }, function (err) {
              _this12.loading3 = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this12.error = 'Client side error:Please check your internet';
              } else {
                _this12.error = err.message;
              }

              setTimeout(function () {
                _this12.error = "";
              }, 2000);
            });
          }
        }]);

        return EditComponent;
      }();

      EditComponent.ɵfac = function EditComponent_Factory(t) {
        return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_control_service__WEBPACK_IMPORTED_MODULE_6__["QuestionControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]));
      };

      EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditComponent,
        selectors: [["app-edit"]],
        decls: 11,
        vars: 4,
        consts: [[1, "row"], [1, "col-6"], [1, "float-right"], [4, "ngIf"], [3, "success"], [3, "error"], ["class", "form p-3", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 1, "form", "p-3", 3, "formGroup", "ngSubmit"], [1, "form-row"], ["class", "col-lg-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "form-row", "mt-2"], [1, "col-1"], ["class", "btn btn-success", "type", "submit", 3, "disabled", 4, "ngIf"], ["class", "spinner-border", "role", "status", 4, "ngIf"], ["class", "btn btn-danger", "type", "submit", 3, "click", 4, "ngIf"], [1, "col-10"], [1, "col-lg-6", "col-sm-12"], [3, "question", "form"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["type", "submit", 1, "btn", "btn-danger", 3, "click"]],
        template: function EditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "l");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditComponent_app_loader_7_Template, 1, 0, "app-loader", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditComponent_div_8_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-success", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-errors", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("success", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx.error);
          }
        },
        directives: [src_app_component_back_back_component__WEBPACK_IMPORTED_MODULE_8__["BackComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], src_app_component_success_success_component__WEBPACK_IMPORTED_MODULE_9__["SuccessComponent"], src_app_component_errors_errors_component__WEBPACK_IMPORTED_MODULE_10__["ErrorsComponent"], src_app_template_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], src_app_component_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__["DynamicFormComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_service_control_service__WEBPACK_IMPORTED_MODULE_6__["QuestionControlService"]
          }, {
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "K2lX":
    /*!*****************************************!*\
      !*** ./src/app/models/edit-dropdown.ts ***!
      \*****************************************/

    /*! exports provided: DropdownQuestion */

    /***/
    function K2lX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function () {
        return DropdownQuestion;
      });
      /* harmony import */


      var _edit_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-base */
      "jdkq");

      var DropdownQuestion = /*#__PURE__*/function (_edit_base__WEBPACK_I) {
        _inherits(DropdownQuestion, _edit_base__WEBPACK_I);

        var _super3 = _createSuper(DropdownQuestion);

        function DropdownQuestion() {
          var _this13;

          _classCallCheck(this, DropdownQuestion);

          _this13 = _super3.apply(this, arguments);
          _this13.controlType = 'dropdown';
          return _this13;
        }

        return DropdownQuestion;
      }(_edit_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]);
      /***/

    },

    /***/
    "MVDT":
    /*!******************************************************!*\
      !*** ./src/app/@template/header/header.component.ts ***!
      \******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MVDT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.setting = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
          this.logout = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPowerOff"];
          this.account = false;

          if (sessionStorage.getItem('PWFName') === 'Admin') {
            this.account = true;
          }
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Task",
          value: function Task() {
            sessionStorage.removeItem('Menu');
            sessionStorage.setItem('Menu', 'Task');
            location.reload();
          }
        }, {
          key: "Client",
          value: function Client() {
            sessionStorage.removeItem('Menu');
            sessionStorage.setItem('Menu', 'Client');
            location.reload();
          }
        }, {
          key: "Card",
          value: function Card() {
            sessionStorage.removeItem('Menu');
            sessionStorage.setItem('Menu', 'Card');
          }
        }, {
          key: "Acct",
          value: function Acct() {
            sessionStorage.removeItem('Menu');
            sessionStorage.setItem('Menu', 'Acct');
          }
        }, {
          key: "logoff",
          value: function logoff() {
            sessionStorage.clear();
            localStorage.clear();
            this.router.navigateByUrl('#');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 1,
        consts: [[1, "navbar"], [1, "container"], [1, "navbar-header"], ["src", "http://144.217.234.79/logo.png", "height", "90", "width", "90"], ["id", "open-navbar1", 1, "navbar-menu"], [1, "navbar-nav"], [1, "active"], ["href", "#"], [2, "color", "#ff6500", 3, "click"], ["size", "2x", 3, "icon"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
              return ctx.logoff();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.logout);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1170px;\n  position: relative;\n  margin-left: 20px;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.navbar[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.035);\n  background-color: #fff;\n  \n  \n}\n\n@media (min-width: 576px) {\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row-reverse;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  display: none;\n  outline: none;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 22px;\n  background-color: #929aad;\n  display: block;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.2rem;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #3c4250;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 1;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    display: none;\n    text-align: center;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-direction: row;\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    border-top: 1px solid #EEE;\n    margin-top: 1rem;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #3c4250;\n  text-decoration: none;\n  display: inline-block;\n  padding: 0.5rem 1rem;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #ff6500;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #EEE;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff6500;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-dropdown[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  list-style: none;\n  position: absolute;\n  top: 150%;\n  left: 0;\n  background-color: #fff;\n  padding: 0.5rem 0;\n  min-width: 160px;\n  width: auto;\n  white-space: nowrap;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\n  z-index: 99999;\n  border-radius: 0.75rem;\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-dropdown[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    box-shadow: none;\n  }\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-dropdown[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3c4250;\n  padding: 0.25rem 1rem;\n  display: block;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .navbar-dropdown[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .separator[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  margin: 9px 0;\n  background-color: #eee;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff6500;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.25rem;\n}\n\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBVEY7O0FBYUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBb0JBOztFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFqQkY7O0FBa0JFO0VBUEY7O0lBUUksY0FBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBRUUsOENBNUNjO0VBNkNkLHNCQWhEa0I7RUFpRWxCOzs7O0dBQUE7RUE0Q0E7Ozs7R0FBQTtBQWxFRjs7QUFRSTtFQURGO0lBRUksZUFBQTtFQUxKO0FBQ0Y7O0FBTUk7RUFKRjtJQUtJLGVBQUE7RUFISjtBQUNGOztBQUlJO0VBUEY7SUFRSSxlQUFBO0VBREo7QUFDRjs7QUFFSTtFQVZGO0lBV0ksZUFBQTtFQUNKO0FBQ0Y7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPSTtFQUpGO0lBS0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsMkJBQUE7RUFKSjtBQUNGOztBQU1JO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFKTjs7QUFNTTtFQVJGO0lBUThCLGNBQUE7RUFGaEM7QUFDRjs7QUFHTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRFI7O0FBR007RUFDRSxxQkFBQTtBQURSOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxjQTVHTTtBQXlHWjs7QUFZRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVZKOztBQVlJO0VBTkY7SUFPSSxhQUFBO0lBQ0Esa0JBQUE7RUFUSjtBQUNGOztBQVlJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVZOOztBQVlNO0VBUkY7SUFTSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7RUFUTjtBQUNGOztBQVlRO0VBQ0UsY0FsSkU7RUFtSkYscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBVlY7O0FBV1U7RUFDRSxjQXhKQztBQStJYjs7QUFXVTtFQVJGO0lBU0ksNkJBQUE7RUFSVjtBQUNGOztBQVdVO0VBQ0UsY0FoS0M7QUF1SmI7O0FBZVE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFiVjs7QUFjVTtFQWRGO0lBZUksa0JBQUE7SUFDQSxnQkFBQTtFQVhWO0FBQ0Y7O0FBYVk7RUFDRSxjQXpMRjtFQTBMRSxxQkFBQTtFQUNBLGNBQUE7QUFYZDs7QUFjVTtFQUNFLHlCQUFBO0FBWlo7O0FBaUJNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBbk0wQjtBQW9MbEM7O0FBb0JFO0VBQ0Usa0JBQUE7QUFsQko7O0FBd0JBO0VBQ0UsY0F0Tlc7QUFpTWI7O0FBdUJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUFxQkU7RUFIRjtJQUlJLGtCQUFBO0VBbEJGO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbiRiYXNlLWNvbG9yOiAjZmY2NTAwO1xyXG4kdGV4dC1kYXJrOiAjM2M0MjUwO1xyXG4kYm9yZGVyLWNvbG9yOiAjZWNlY2VjO1xyXG5cclxuJG5hdmJhci1ib2R5LWNvbG9yOiAjZmZmO1xyXG4kbmF2YmFyLWxpbmstaG92ZXI6ICRiYXNlLWNvbG9yO1xyXG4kbmF2YmFyLWRyb3Bkb3duLXNlcGFyYXRvci1jb2xvcjogI2VlZTtcclxuJG5hdmJhci1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjAzNSk7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDExNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiB7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIHBhZGRpbmc6IHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8vIFN0YXJ0IG5hdmJhclxyXG5cclxuLm5hdmJhcixcclxuLm5hdmJhciAuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgLy8gcGFkZGluZzogMS4xNXJlbSAxcmVtO1xyXG4gIGJveC1zaGFkb3c6ICRuYXZiYXItc2hhZG93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItYm9keS1jb2xvcjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgfCBTdGFydCBuYXZiYXIgbG9nbyBvciBicmFuZCBldGMuLlxyXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICovXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBkaXNwbGF5OiBibG9jayB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCR0ZXh0LWRhcmssIDM1JSk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGEge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgfCBTdGFydCBuYXZiYXIgbWVudVxyXG4gIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICovXHJcbiAgLm5hdmJhci1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVsXHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0VFRTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IGxpIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LWRhcms7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1saW5rLWhvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmJhci1kcm9wZG93biB7XHJcbiAgICAgICAgLmRyb3Bkb3duIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDE1MCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5zaG93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93biA+IC5zZXBhcmF0b3Ige1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogOXB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kcm9wZG93bi1zZXBhcmF0b3ItY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEN1c3RvbVxyXG4ubmF2YmFyIC5uYXZiYXItaGVhZGVyID4gYSBzcGFuIHtcclxuICBjb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLWhlYWRlciBoNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OhPK":
    /*!*************************************************!*\
      !*** ./src/app/@component/emm/emm.component.ts ***!
      \*************************************************/

    /*! exports provided: EmmComponent */

    /***/
    function OhPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmmComponent", function () {
        return EmmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function EmmComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
        }
      }

      function EmmComponent_tsktable_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r1.baseItems)("caption", "Executive Management meeting")("settings", ctx_r1.projectSettings)("searchText", ctx_r1.searchText)("loading", ctx_r1.loading)("sn", true)("api", ctx_r1.apis);
        }
      }

      function EmmComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmmComponent_div_3_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("item");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
        }
      }

      var EmmComponent = /*#__PURE__*/function (_base_base_component_3) {
        _inherits(EmmComponent, _base_base_component_3);

        var _super4 = _createSuper(EmmComponent);

        function EmmComponent(api, enums, router) {
          var _this14;

          _classCallCheck(this, EmmComponent);

          _this14 = _super4.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          _this14.api = api;
          _this14.enums = enums;
          _this14.router = router; // routePage ="../edit";

          _this14.apis = 'customer';
          _this14.projectSettings = [{
            primaryKey: "TaskID",
            header: "Task ID",
            routerParams: true
          }, {
            primaryKey: "ActionItem",
            header: "ActionItem"
          }, {
            primaryKey: "TaskTypeName",
            header: "Task Type"
          }, {
            primaryKey: "TaskDescription",
            header: "Task Description"
          }, {
            primaryKey: "StartDate",
            header: "Start Date"
          }, {
            primaryKey: "EndDate",
            header: "End Date"
          }, {
            primaryKey: "ResponsibleOwnerName",
            header: "Responsible Owner"
          }, {
            primaryKey: "Department",
            header: "Department"
          }, {
            primaryKey: "DepartmentHOD",
            header: "DepartmentHOD"
          }, {
            primaryKey: "Status",
            header: "Status"
          }];
          return _this14;
        }

        _createClass(EmmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readtasktype(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task, {
              "TaskType": "EMM"
            });
          }
        }]);

        return EmmComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      EmmComponent.ɵfac = function EmmComponent_Factory(t) {
        return new (t || EmmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      EmmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmmComponent,
        selectors: [["app-emm"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "records", "caption", "settings", "searchText", "loading", "sn", "api"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 3, "click"]],
        template: function EmmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmmComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmmComponent_tsktable_1_Template, 1, 7, "tsktable", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmmComponent_div_3_Template, 4, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbW0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-emm',
            templateUrl: './emm.component.html',
            styleUrls: ['./emm.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RhjD":
    /*!***************************************************!*\
      !*** ./src/app/@component/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function RhjD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./router.animation */
      "aJes");
      /* harmony import */


      var src_app_template_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/@template/header/header.component */
      "MVDT");
      /* harmony import */


      var src_app_template_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@template/nav-menu/nav-menu.component */
      "ZRJX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 7,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-2", "d-none", "d-md-block", "bg-light", "sidebar"], [1, "col-md-9", "ml-sm-auto", "col-lg-10", "pt-3", "px-4"], ["outlet", "outlet"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-menu", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@triggerName", ctx.prepareRoute(_r0));
          }
        },
        directives: [src_app_template_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], src_app_template_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_router_animation__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [_router_animation__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "S7xi":
    /*!***************************************************!*\
      !*** ./src/app/@component/base/base.component.ts ***!
      \***************************************************/

    /*! exports provided: BaseComponent */

    /***/
    function S7xi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return BaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent(api, enums) {
          _classCallCheck(this, BaseComponent);

          this.api = api;
          this.enums = enums;
          this.baseItems = [];
          this.loading = false;
          this.Aoading = false;
          this.error = '';
          this.p = 0;
          this.a = 0;
          this.r = 0;
          this.err = "";
          this.emptys = "";
        }

        _createClass(BaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "read",
          value: function read(item) {
            var _this15 = this;

            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.loading = true;
            this.error = "";
            this.api.read(item, value).subscribe(function (res) {
              _this15.loading = false;
              _this15.baseItems = res.records;
              _this15.p = _this15.baseItems.filter(function (r) {
                return r.Status == "Pending";
              }).length;
              _this15.a = _this15.baseItems.filter(function (r) {
                return r.Status == "Approved";
              }).length;
              _this15.r = _this15.baseItems.filter(function (r) {
                return r.Status == "Rejected";
              }).length;
            }, function (err) {
              _this15.loading = false;
              _this15.baseItems = [];

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this15.error = "Please check your internet";
              } else {
                _this15.error = err.error.message;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
          }
        }, {
          key: "readone",
          value: function readone(item, value) {
            var _this16 = this;

            this.loading = true;
            this.error = "";
            this.api.read_one(item, value).subscribe(function (res) {
              _this16.loading = false;
              _this16.baseItems = res.records;
              _this16.p = _this16.baseItems.filter(function (r) {
                return r.Status == "Pending";
              }).length;
              _this16.a = _this16.baseItems.filter(function (r) {
                return r.Status == "Approved";
              }).length;
              _this16.r = _this16.baseItems.filter(function (r) {
                return r.Status == "Rejected";
              }).length;
            }, function (err) {
              _this16.loading = false;
              _this16.baseItems = [];

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this16.error = "Please check your internet";
              } else {
                _this16.error = err.error.message;
              }
            });
          }
        }, {
          key: "readonef",
          value: function readonef(item, value) {
            var _this17 = this;

            this.loading = true;
            this.error = "";
            this.api.read_one(item, value).subscribe(function (res) {
              _this17.loading = false;
              _this17.baseItems = res.records;
            }, function (err) {
              _this17.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this17.error = "Please check your internet";
              } else {
                _this17.error = err.error.message;
              }
            });
          }
        }, {
          key: "passValue",
          value: function passValue(value) {
            this.searchText = value;
          }
        }, {
          key: "readtasktype",
          value: function readtasktype(item, value) {
            var _this18 = this;

            this.loading = true;
            this.error = "";
            this.api.readtasktype(item, value).subscribe(function (res) {
              _this18.loading = false;
              _this18.baseItems = res.records;
            }, function (err) {
              _this18.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this18.error = "Please check your internet";
              } else {
                _this18.error = err.error.message;
              }
            });
          }
        }, {
          key: "readbyposteduser",
          value: function readbyposteduser(item) {
            var _this19 = this;

            this.loading = true;
            this.error = "";
            this.api.readbyposteduser(item).subscribe(function (res) {
              _this19.loading = false;
              _this19.baseItems = res.records;
            }, function (err) {
              _this19.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this19.error = "Please check your internet";
              } else {
                _this19.error = err.error.message;
              }
            });
          }
        }, {
          key: "readbyresponsibleowner",
          value: function readbyresponsibleowner(item) {
            var _this20 = this;

            this.loading = true;
            this.error = "";
            this.api.readbyresponsibleowner(item).subscribe(function (res) {
              _this20.loading = false;
              _this20.baseItems = res.records;
            }, function (err) {
              _this20.loading = false;

              if (err.status === 0 && err.error instanceof ProgressEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this20.error = "Please check your internet";
              } else {
                _this20.error = err.error.message;
              }
            });
          }
        }]);

        return BaseComponent;
      }();

      BaseComponent.ɵfac = function BaseComponent_Factory(t) {
        return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"]));
      };

      BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BaseComponent,
        selectors: [["app-base"]],
        decls: 2,
        vars: 0,
        template: function BaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "base works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-base",
            template: " <p>base works!</p> ",
            styleUrls: ["./base.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_2__["APIENUM"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Tn30":
    /*!*********************************************!*\
      !*** ./src/app/@service/control.service.ts ***!
      \*********************************************/

    /*! exports provided: QuestionControlService */

    /***/
    function Tn30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionControlService", function () {
        return QuestionControlService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var QuestionControlService = /*#__PURE__*/function () {
        function QuestionControlService() {
          _classCallCheck(this, QuestionControlService);

          this.lest = 0;
        }

        _createClass(QuestionControlService, [{
          key: "toFormGroup",
          value: function toFormGroup(questions) {
            var group = {};
            questions.forEach(function (question) {
              group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '');
            });
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
          }
        }, {
          key: "checkLimit",
          value: function checkLimit(min, max) {
            return function (c) {
              if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return {
                  'range': true
                };
              }

              return null;
            };
          }
        }]);

        return QuestionControlService;
      }();

      QuestionControlService.ɵfac = function QuestionControlService_Factory(t) {
        return new (t || QuestionControlService)();
      };

      QuestionControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: QuestionControlService,
        factory: QuestionControlService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionControlService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZRJX":
    /*!**********************************************************!*\
      !*** ./src/app/@template/nav-menu/nav-menu.component.ts ***!
      \**********************************************************/

    /*! exports provided: NavMenuComponent */

    /***/
    function ZRJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
        return NavMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function NavMenuComponent_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
        }
      }

      var NavMenuComponent = /*#__PURE__*/function () {
        function NavMenuComponent() {
          _classCallCheck(this, NavMenuComponent);

          this.icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
          this.Menu = [];
          this.isExpanded = false;

          if (sessionStorage.getItem('Menu') === 'Task') {
            this.Menu = [{
              title: 'Task Input',
              // icon: 'map',
              link: 'table',
              home: true
            }, {
              title: 'Task Update',
              // icon: 'briefcase-outline',
              link: 'taskupdate'
            }, {
              title: 'Monthly Performance Review',
              //  icon: faAddressBook,
              link: 'mpr'
            }, {
              title: 'Executive Management meeting',
              //  icon: faAddressBook,
              link: 'emm'
            }, {
              title: 'Other meetings',
              //  icon: faAddressBook,
              link: 'others'
            }];
          }

          if (sessionStorage.getItem('PWFName') === 'Admin' && sessionStorage.getItem('Menu') === 'Client') {
            this.Menu = [{
              title: 'Task Input',
              // icon: 'map',
              link: 'dashboard',
              home: true
            }, {
              title: 'Task Update',
              // icon: 'briefcase-outline',
              link: '/table'
            }];
          }
        }

        _createClass(NavMenuComponent, [{
          key: "collapse",
          value: function collapse() {
            this.isExpanded = false;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isExpanded = !this.isExpanded;
          }
        }]);

        return NavMenuComponent;
      }();

      NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
        return new (t || NavMenuComponent)();
      };

      NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavMenuComponent,
        selectors: [["app-nav-menu"]],
        decls: 3,
        vars: 1,
        consts: [[1, "h-100", "d-inline-block"], [1, "sidebar-sticky"], ["class", "nav flex-column", 4, "ngFor", "ngForOf"], [1, "nav", "flex-column"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "nav-link"]],
        template: function NavMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavMenuComponent_ul_2_Template, 4, 2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Menu);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #ff6500;\n  border-color: #ff6500;\n  color: #fff !important;\n  border-radius: 5px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #495057;\n  margin: 0 0 -1px;\n  cursor: default;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  width: 100%;\n  color: black;\n  background-color: #e6d2c4;\n  margin: 0 0 -1px;\n  cursor: default;\n}\n\n.sidebar-sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: large;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #ff6500;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #e0e0e0 !important;\n}\n\n\n\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e5e5;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFBVyxxQkFBQTtFQUNYLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQWtCLDZEQUFBO0FBTXBCOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtBQU1GOztBQUhBOztFQUVFLGNBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLG9DQUFBO0FBT0Y7O0FBSEE7O0VBQUE7O0FBSUE7RUFBYyw2QkFBQTtBQU1kOztBQUxBO0VBQWlCLGdDQUFBO0FBU2pCIiwiZmlsZSI6Im5hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcblxyXG59XHJcbi5hY3RpdmUgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjUwMDtcclxuICBib3JkZXItY29sb3I6I2ZmNjUwMDs7XHJcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubmF2LWl0ZW0gYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgbWFyZ2luOiAwIDAgLTFweDtcclxuICBjdXJzb3I6IGRlZmF1bHRcclxufVxyXG4ubmF2LWl0ZW0gYTpob3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmQyYzQ7XHJcbiAgbWFyZ2luOiAwIDAgLTFweDtcclxuICBjdXJzb3I6IGRlZmF1bHRcclxufVxyXG4uc2lkZWJhci1zdGlja3kge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNDhweDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsgLmZlYXRoZXIge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZmNjUwMDtcclxufVxyXG5cclxuLnNpZGViYXIgLm5hdi1saW5rOmhvdmVyIC5mZWF0aGVyLFxyXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLypcclxuICogVXRpbGl0aWVzXHJcbiAqL1xyXG5cclxuLmJvcmRlci10b3AgeyBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTsgfVxyXG4uYm9yZGVyLWJvdHRvbSB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XHJcbiJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aJes":
    /*!*****************************************************!*\
      !*** ./src/app/@component/home/router.animation.ts ***!
      \*****************************************************/

    /*! exports provided: routeTransitionAnimations, fadeAnimation */

    /***/
    function aJes(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function () {
        return routeTransitionAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
        return fadeAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('triggerName', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('One => Two, Two => Three, One => Three', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '-100%',
        opacity: 0
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '100%',
        opacity: 0
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        right: '0%',
        opacity: 1
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Three => Two, Two => One, Three => One', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '-100%',
        opacity: 0
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '100%',
        opacity: 0
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        left: '0%',
        opacity: 1
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())])]); // export const routeTransitionAnimations = trigger('triggerName', [
      // 	transition('One => Two, Two => Three', [
      // 		style({ position: 'relative' }),
      // 		query(':enter, :leave', [
      // 			style({
      // 				position: 'absolute',
      // 				top: 0,
      // 				right: 0,
      // 				width: '100%'
      // 			})
      // 		]),
      // 		query(':enter', [style({ right: '-100%', opacity: 0 })]),
      // 		query(':leave', animateChild()),
      // 		group([
      // 			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
      // 			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
      // 		]),
      // 		query(':enter', animateChild())
      // 	])
      // 	// ,
      // 	// transition('* <=> FilterPage', [
      // 	// 	style({ position: 'relative' }),
      // 	// 	query(':enter, :leave', [
      // 	// 		style({
      // 	// 			position: 'absolute',
      // 	// 			top: 0,
      // 	// 			left: 0,
      // 	// 			width: '100%'
      // 	// 		})
      // 	// 	]),
      // 	// 	query(':enter', [style({ left: '-100%' })]),
      // 	// 	query(':leave', animateChild()),
      // 	// 	group([
      // 	// 		query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
      // 	// 		query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
      // 	// 	]),
      // 	// 	query(':enter', animateChild())
      // 	// ])
      // ]);

      var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }))], {
        optional: true
      })])]);
      /***/
    },

    /***/
    "ag4N":
    /*!*****************************************************!*\
      !*** ./src/app/@module/main/main-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MainRoutingModule */

    /***/
    function ag4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
        return MainRoutingModule;
      });
      /* harmony import */


      var _component_taskupdate_taskupdate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../@component/taskupdate/taskupdate.component */
      "ew2r");
      /* harmony import */


      var _component_other_other_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../@component/other/other.component */
      "7e0V");
      /* harmony import */


      var _component_emm_emm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../@component/emm/emm.component */
      "OhPK");
      /* harmony import */


      var _component_mpr_mpr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../@component/mpr/mpr.component */
      "Ax6E");
      /* harmony import */


      var _component_tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../@component/tasktable/tasktable.component */
      "pGoK");
      /* harmony import */


      var _component_task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../@component/task/task.component */
      "2isk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_component_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/@component/edit/edit.component */
      "Ju10");
      /* harmony import */


      var src_app_component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/@component/home/home.component */
      "RhjD"); // import { DashboardComponent } from 'src/app/@component/dashboard/dashboard.component';
      // import { ExpenseComponent } from 'src/app/@component/expense/expense.component';
      // const routes: Routes = [
      //   {
      //     path: '',
      //     component: HomeComponent,
      //     // canActivate: [ AuthAdminGuard], invoice
      //     children: [{ path: 'item', component: DashboardComponent,data: { animationState: 'Two' } },
      //     { path: 'expenses', component: ExpenseComponent,data: { animationState: 'Three' } },
      //     { path: 'dashboard', component: TaskComponent,data: { animationState: 'Two' } },
      //     { path: 'table', component: TasktableComponent,data: { animationState: 'Two' } },
      //     { path: 'edit/:id/:api/:value', component: EditComponent,data: { animationState: 'Two' } }
      //     ],
      //   },
      // ];


      var routes2 = [{
        path: '',
        component: src_app_component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        // canActivate: [ AuthAdminGuard], invoice
        children: [{
          path: 'create/:id/:api/:value/:name',
          component: _component_task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'table',
          component: _component_tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_4__["TasktableComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'taskupdate',
          component: _component_taskupdate_taskupdate_component__WEBPACK_IMPORTED_MODULE_0__["TaskupdateComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'mpr',
          component: _component_mpr_mpr_component__WEBPACK_IMPORTED_MODULE_3__["MprComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'emm',
          component: _component_emm_emm_component__WEBPACK_IMPORTED_MODULE_2__["EmmComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'others',
          component: _component_other_other_component__WEBPACK_IMPORTED_MODULE_1__["OtherComponent"],
          data: {
            animationState: 'Two'
          }
        }, {
          path: 'edit/:id/:api/:value',
          component: src_app_component_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
          data: {
            animationState: 'Two'
          }
        }]
      }];

      var MainRoutingModule = function MainRoutingModule() {
        _classCallCheck(this, MainRoutingModule);
      };

      MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: MainRoutingModule
      });
      MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function MainRoutingModule_Factory(t) {
          return new (t || MainRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes2)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MainRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes2)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ew2r":
    /*!***************************************************************!*\
      !*** ./src/app/@component/taskupdate/taskupdate.component.ts ***!
      \***************************************************************/

    /*! exports provided: TaskupdateComponent */

    /***/
    function ew2r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskupdateComponent", function () {
        return TaskupdateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function TaskupdateComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.success, "\n");
        }
      }

      function TaskupdateComponent_tsktable_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r1.baseItems)("caption", "Task")("settings", ctx_r1.projectSettings)("routePage", ctx_r1.routePage)("searchText", ctx_r1.searchText)("loading", ctx_r1.loading)("sn", true)("api", ctx_r1.apis)("name", "update");
        }
      }

      function TaskupdateComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskupdateComponent_div_3_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("item");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
        }
      }

      var TaskupdateComponent = /*#__PURE__*/function (_base_base_component_4) {
        _inherits(TaskupdateComponent, _base_base_component_4);

        var _super5 = _createSuper(TaskupdateComponent);

        function TaskupdateComponent(api, enums, router) {
          var _this21;

          _classCallCheck(this, TaskupdateComponent);

          _this21 = _super5.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          _this21.api = api;
          _this21.enums = enums;
          _this21.router = router;
          _this21.routePage = "../create";
          _this21.apis = 'task';
          _this21.projectSettings = [{
            primaryKey: "TaskID",
            header: "Task ID",
            routerParams: true
          }, {
            primaryKey: "ActionItem",
            header: "ActionItem"
          }, {
            primaryKey: "TaskTypeName",
            header: "Task Type"
          }, {
            primaryKey: "TaskDescription",
            header: "Task Description"
          }, {
            primaryKey: "StartDate",
            header: "Start Date"
          }, {
            primaryKey: "EndDate",
            header: "End Date"
          }, {
            primaryKey: "ResponsibleOwnerName",
            header: "Responsible Owner"
          }, {
            primaryKey: "Department",
            header: "Department"
          }, // {
          //   primaryKey: "DepartmentHOD",
          //   header: "Department Head",
          // },
          {
            primaryKey: "Status",
            header: "Status"
          }];
          return _this21;
        }

        _createClass(TaskupdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readbyposteduser(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          }
        }]);

        return TaskupdateComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      TaskupdateComponent.ɵfac = function TaskupdateComponent_Factory(t) {
        return new (t || TaskupdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TaskupdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskupdateComponent,
        selectors: [["app-taskupdate"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "routePage", "searchText", "loading", "sn", "api", "name", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "records", "caption", "settings", "routePage", "searchText", "loading", "sn", "api", "name"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 3, "click"]],
        template: function TaskupdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskupdateComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskupdateComponent_tsktable_1_Template, 1, 9, "tsktable", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskupdateComponent_div_3_Template, 4, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskupdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-taskupdate',
            templateUrl: './taskupdate.component.html',
            styleUrls: ['./taskupdate.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g7LQ":
    /*!*********************************************!*\
      !*** ./src/app/@module/main/main.module.ts ***!
      \*********************************************/

    /*! exports provided: MainModule */

    /***/
    function g7LQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainModule", function () {
        return MainModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-routing.module */
      "ag4N");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_service_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/@service/interceptor */
      "IiGU");
      /* harmony import */


      var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@component/dashboard/dashboard.component */
      "Fk01");
      /* harmony import */


      var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@component/home/home.component */
      "RhjD");
      /* harmony import */


      var src_app_template_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/@template/header/header.component */
      "MVDT");
      /* harmony import */


      var src_app_template_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/@template/nav-menu/nav-menu.component */
      "ZRJX");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_component_base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/@component/base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shared/shared.module */
      "w30O");
      /* harmony import */


      var _component_expense_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../@component/expense/expense.component */
      "zpx1");
      /* harmony import */


      var _component_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../@component/edit/edit.component */
      "Ju10");
      /* harmony import */


      var src_app_service_control_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/@service/control.service */
      "Tn30");
      /* harmony import */


      var _component_task_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../@component/task/task.component */
      "2isk");
      /* harmony import */


      var _component_tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../@component/tasktable/tasktable.component */
      "pGoK");
      /* harmony import */


      var _component_mpr_mpr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../@component/mpr/mpr.component */
      "Ax6E");
      /* harmony import */


      var _component_emm_emm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../@component/emm/emm.component */
      "OhPK");
      /* harmony import */


      var _component_other_other_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../@component/other/other.component */
      "7e0V");
      /* harmony import */


      var _component_taskupdate_taskupdate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../@component/taskupdate/taskupdate.component */
      "ew2r");

      var MainModule = function MainModule() {
        _classCallCheck(this, MainModule);
      };

      MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MainModule
      });
      MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MainModule_Factory(t) {
          return new (t || MainModule)();
        },
        providers: [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], src_app_service_control_service__WEBPACK_IMPORTED_MODULE_15__["QuestionControlService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: src_app_service_interceptor__WEBPACK_IMPORTED_MODULE_4__["InterceptorServices"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, {
          declarations: [_component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], src_app_template_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], src_app_template_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], src_app_component_base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"], _component_expense_expense_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseComponent"], _component_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"], _component_task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"], _component_tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_17__["TasktableComponent"], _component_mpr_mpr_component__WEBPACK_IMPORTED_MODULE_18__["MprComponent"], _component_emm_emm_component__WEBPACK_IMPORTED_MODULE_19__["EmmComponent"], _component_other_other_component__WEBPACK_IMPORTED_MODULE_20__["OtherComponent"], _component_taskupdate_taskupdate_component__WEBPACK_IMPORTED_MODULE_21__["TaskupdateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], src_app_template_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], src_app_template_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], src_app_component_base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"], _component_expense_expense_component__WEBPACK_IMPORTED_MODULE_13__["ExpenseComponent"], _component_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"], _component_task_task_component__WEBPACK_IMPORTED_MODULE_16__["TaskComponent"], _component_tasktable_tasktable_component__WEBPACK_IMPORTED_MODULE_17__["TasktableComponent"], _component_mpr_mpr_component__WEBPACK_IMPORTED_MODULE_18__["MprComponent"], _component_emm_emm_component__WEBPACK_IMPORTED_MODULE_19__["EmmComponent"], _component_other_other_component__WEBPACK_IMPORTED_MODULE_20__["OtherComponent"], _component_taskupdate_taskupdate_component__WEBPACK_IMPORTED_MODULE_21__["TaskupdateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]],
            providers: [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], src_app_service_control_service__WEBPACK_IMPORTED_MODULE_15__["QuestionControlService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: src_app_service_interceptor__WEBPACK_IMPORTED_MODULE_4__["InterceptorServices"],
              multi: true
            }],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kTee":
    /*!****************************************!*\
      !*** ./src/app/models/edit-textbox.ts ***!
      \****************************************/

    /*! exports provided: TextboxQuestion */

    /***/
    function kTee(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function () {
        return TextboxQuestion;
      });
      /* harmony import */


      var _edit_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-base */
      "jdkq");

      var TextboxQuestion = /*#__PURE__*/function (_edit_base__WEBPACK_I2) {
        _inherits(TextboxQuestion, _edit_base__WEBPACK_I2);

        var _super6 = _createSuper(TextboxQuestion);

        function TextboxQuestion() {
          var _this22;

          _classCallCheck(this, TextboxQuestion);

          _this22 = _super6.apply(this, arguments);
          _this22.controlType = 'textbox';
          return _this22;
        }

        return TextboxQuestion;
      }(_edit_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]);
      /***/

    },

    /***/
    "pGoK":
    /*!*************************************************************!*\
      !*** ./src/app/@component/tasktable/tasktable.component.ts ***!
      \*************************************************************/

    /*! exports provided: TasktableComponent */

    /***/
    function pGoK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasktableComponent", function () {
        return TasktableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function TasktableComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
        }
      }

      function TasktableComponent_tsktable_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 11);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r1.baseItems)("caption", "Task")("settings", ctx_r1.projectSettings)("routePage", ctx_r1.routePage)("searchText", ctx_r1.searchText)("loading", ctx_r1.loading)("sn", true)("api", ctx_r1.apis)("name", "input");
        }
      }

      function TasktableComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasktableComponent_div_11_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("item");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
        }
      }

      var TasktableComponent = /*#__PURE__*/function (_base_base_component_5) {
        _inherits(TasktableComponent, _base_base_component_5);

        var _super7 = _createSuper(TasktableComponent);

        function TasktableComponent(api, enums, router) {
          var _this23;

          _classCallCheck(this, TasktableComponent);

          _this23 = _super7.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          _this23.api = api;
          _this23.enums = enums;
          _this23.router = router;
          _this23.routePage = "../create";
          _this23.apis = 'task';
          _this23.projectSettings = [{
            primaryKey: "TaskID",
            header: "Task ID",
            routerParams: true
          }, {
            primaryKey: "ActionItem",
            header: "Action Item"
          }, {
            primaryKey: "TaskTypeName",
            header: "Task Type"
          }, {
            primaryKey: "TaskDescription",
            header: "Task Description"
          }, {
            primaryKey: "StartDate",
            header: "Start Date"
          }, {
            primaryKey: "EndDate",
            header: "End Date"
          }, {
            primaryKey: "ResponsibleOwnerName",
            header: "Responsible Owner"
          }, {
            primaryKey: "Department",
            header: "Department"
          }, // {
          //   primaryKey: "DepartmentHOD",
          //   header: "Department Head",
          // },
          {
            primaryKey: "Status",
            header: "Status"
          }];
          return _this23;
        }

        _createClass(TasktableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readbyresponsibleowner(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].Task);
          }
        }]);

        return TasktableComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      TasktableComponent.ɵfac = function TasktableComponent_Factory(t) {
        return new (t || TasktableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TasktableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TasktableComponent,
        selectors: [["app-tasktable"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 12,
        vars: 4,
        consts: [[1, "container", "mt-3"], [1, "row"], [1, "col-6"], [1, "row", "float-right"], [1, "col-12"], ["type", "button", 1, "btn", 2, "cursor", "pointer", "background-color", "#ff6500", "color", "#fff", 3, "routerLink"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "routePage", "searchText", "loading", "sn", "api", "name", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "records", "caption", "settings", "routePage", "searchText", "loading", "sn", "api", "name"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 3, "click"]],
        template: function TasktableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TasktableComponent_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TasktableComponent_tsktable_9_Template, 1, 9, "tsktable", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TasktableComponent_div_11_Template, 4, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../create/0/task/0/create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasktableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tasktable',
            templateUrl: './tasktable.component.html',
            styleUrls: ['./tasktable.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zpx1":
    /*!*********************************************************!*\
      !*** ./src/app/@component/expense/expense.component.ts ***!
      \*********************************************************/

    /*! exports provided: ExpenseComponent */

    /***/
    function zpx1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function () {
        return ExpenseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/@service/api.type */
      "+PKl");
      /* harmony import */


      var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../base/base.component */
      "S7xi");
      /* harmony import */


      var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/@service/api.service */
      "lVyF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/@template/table/table.component */
      "Oh8/");

      function ExpenseComponent_tsktable_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tsktable", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("records", ctx_r0.baseItems)("caption", "Suppliers")("settings", ctx_r0.projectSettings)("routePage", ctx_r0.routePage)("searchText", ctx_r0.searchText)("api", ctx_r0.apis)("loading", ctx_r0.loading);
        }
      }

      function ExpenseComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseComponent_div_2_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.read("supplier");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click to retry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
        }
      }

      function ExpenseComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.success, " ");
        }
      }

      var ExpenseComponent = /*#__PURE__*/function (_base_base_component_6) {
        _inherits(ExpenseComponent, _base_base_component_6);

        var _super8 = _createSuper(ExpenseComponent);

        function ExpenseComponent(api, enums, router) {
          var _this24;

          _classCallCheck(this, ExpenseComponent);

          _this24 = _super8.call(this, api, src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].SUPPLIER);
          _this24.api = api;
          _this24.enums = enums;
          _this24.router = router;
          _this24.routePage = "../bili";
          _this24.apis = 'stt';
          _this24.projectSettings = [{
            primaryKey: "SupplierID",
            header: "Supplier ID",
            routerParams: true
          }, {
            primaryKey: "SupplierName",
            header: "Supplier Name"
          }, {
            primaryKey: "Telephone1",
            header: "Telephone"
          }, {
            primaryKey: "Email",
            header: "Email Address"
          }];
          return _this24;
        }

        _createClass(ExpenseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.read(src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"].SUPPLIER);
          }
        }]);

        return ExpenseComponent;
      }(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      ExpenseComponent.ɵfac = function ExpenseComponent_Factory(t) {
        return new (t || ExpenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ExpenseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExpenseComponent,
        selectors: [["app-expense"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [[3, "records", "caption", "settings", "routePage", "searchText", "api", "loading", 4, "ngIf"], [1, "col-12", "mt-4"], ["class", "alert alert-danger text-center", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [3, "records", "caption", "settings", "routePage", "searchText", "api", "loading"], ["role", "alert", 1, "alert", "alert-danger", "text-center"], [1, "alert-link", 2, "cursor", "pointer", 3, "click"], ["role", "alert", 1, "alert", "alert-success"]],
        template: function ExpenseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExpenseComponent_tsktable_0_Template, 1, 7, "tsktable", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpenseComponent_div_2_Template, 4, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpenseComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baseItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], src_app_template_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-expense',
            templateUrl: './expense.component.html',
            styleUrls: ['./expense.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_service_api_type__WEBPACK_IMPORTED_MODULE_1__["APIENUM"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-module-main-main-module-es5.js.map