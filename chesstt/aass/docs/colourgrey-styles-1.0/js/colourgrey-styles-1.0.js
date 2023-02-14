function alertmessagefunction(times) {
  alert("hello!");
  for (n = 0; n < times; n++) {
    alert(times - n + "hello!");
  }
  alert("0hello!");
}
var Yt = Vt,
  zt = "dropdown",
  Kt = "bs.dropdown",
  Xt = i.default.fn[zt],
  Gt = new RegExp("38|40|27"),
  $t = "disabled",
  Jt = "show",
  Zt = "dropdown-menu-right",
  te = "hide.bs.dropdown",
  ee = "hidden.bs.dropdown",
  ne = "click.bs.dropdown.data-api",
  ie = "keydown.bs.dropdown.data-api",
  oe = '[data-toggle="dropdown"]',
  re = ".dropdown-menu",
  ae = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
  },
  se = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)",
  },
  le = (function () {
    function t(t, e) {
      (this._element = t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    var e = t.prototype;
    return (
      (e.toggle = function () {
        if (!this._element.disabled && !i.default(this._element).hasClass($t)) {
          var e = i.default(this._menu).hasClass(Jt);
          t._clearMenus(), e || this.show(!0);
        }
      }),
      (e.show = function (e) {
        if (
          (void 0 === e && (e = !1),
          !(
            this._element.disabled ||
            i.default(this._element).hasClass($t) ||
            i.default(this._menu).hasClass(Jt)
          ))
        ) {
          var n = { relatedTarget: this._element },
            o = i.default.Event("show.bs.dropdown", n),
            r = t._getParentFromElement(this._element);
          if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
            if (!this._inNavbar && e) {
              if ("undefined" == typeof Yt)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
              var a = this._element;
              "parent" === this._config.reference
                ? (a = r)
                : u.isElement(this._config.reference) &&
                  ((a = this._config.reference),
                  "undefined" != typeof this._config.reference.jquery &&
                    (a = this._config.reference[0])),
                "scrollParent" !== this._config.boundary &&
                  i.default(r).addClass("position-static"),
                (this._popper = new Yt(a, this._menu, this._getPopperConfig()));
            }
            "ontouchstart" in document.documentElement &&
              0 === i.default(r).closest(".navbar-nav").length &&
              i
                .default(document.body)
                .children()
                .on("mouseover", null, i.default.noop),
              this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              i.default(this._menu).toggleClass(Jt),
              i
                .default(r)
                .toggleClass(Jt)
                .trigger(i.default.Event("shown.bs.dropdown", n));
          }
        }
      }),
      (e.hide = function () {
        if (
          !this._element.disabled &&
          !i.default(this._element).hasClass($t) &&
          i.default(this._menu).hasClass(Jt)
        ) {
          var e = { relatedTarget: this._element },
            n = i.default.Event(te, e),
            o = t._getParentFromElement(this._element);
          i.default(o).trigger(n),
            n.isDefaultPrevented() ||
              (this._popper && this._popper.destroy(),
              i.default(this._menu).toggleClass(Jt),
              i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e)));
        }
      }),
      (e.dispose = function () {
        i.default.removeData(this._element, Kt),
          i.default(this._element).off(".bs.dropdown"),
          (this._element = null),
          (this._menu = null),
          null !== this._popper &&
            (this._popper.destroy(), (this._popper = null));
      }),
      (e.update = function () {
        (this._inNavbar = this._detectNavbar()),
          null !== this._popper && this._popper.scheduleUpdate();
      }),
      (e._addEventListeners = function () {
        var t = this;
        i.default(this._element).on("click.bs.dropdown", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }),
      (e._getConfig = function (t) {
        return (
          (t = a(
            {},
            this.constructor.Default,
            i.default(this._element).data(),
            t
          )),
          u.typeCheckConfig(zt, t, this.constructor.DefaultType),
          t
        );
      }),
      (e._getMenuElement = function () {
        if (!this._menu) {
          var e = t._getParentFromElement(this._element);
          e && (this._menu = e.querySelector(re));
        }
        return this._menu;
      }),
      (e._getPlacement = function () {
        var t = i.default(this._element.parentNode),
          e = "bottom-start";
        return (
          t.hasClass("dropup")
            ? (e = i.default(this._menu).hasClass(Zt) ? "top-end" : "top-start")
            : t.hasClass("dropright")
            ? (e = "right-start")
            : t.hasClass("dropleft")
            ? (e = "left-start")
            : i.default(this._menu).hasClass(Zt) && (e = "bottom-end"),
          e
        );
      }),
      (e._detectNavbar = function () {
        return i.default(this._element).closest(".navbar").length > 0;
      }),
      (e._getOffset = function () {
        var t = this,
          e = {};
        return (
          "function" == typeof this._config.offset
            ? (e.fn = function (e) {
                return (
                  (e.offsets = a(
                    {},
                    e.offsets,
                    t._config.offset(e.offsets, t._element)
                  )),
                  e
                );
              })
            : (e.offset = this._config.offset),
          e
        );
      }),
      (e._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: { enabled: this._config.flip },
            preventOverflow: { boundariesElement: this._config.boundary },
          },
        };
        return (
          "static" === this._config.display &&
            (t.modifiers.applyStyle = { enabled: !1 }),
          a({}, t, this._config.popperConfig)
        );
      }),
      (t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this).data(Kt);
          if (
            (n ||
              ((n = new t(this, "object" == typeof e ? e : null)),
              i.default(this).data(Kt, n)),
            "string" == typeof e)
          ) {
            if ("undefined" == typeof n[e])
              throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }),
      (t._clearMenus = function (e) {
        if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
          for (
            var n = [].slice.call(document.querySelectorAll(oe)),
              o = 0,
              r = n.length;
            o < r;
            o++
          ) {
            var a = t._getParentFromElement(n[o]),
              s = i.default(n[o]).data(Kt),
              l = { relatedTarget: n[o] };
            if ((e && "click" === e.type && (l.clickEvent = e), s)) {
              var u = s._menu;
              if (
                i.default(a).hasClass(Jt) &&
                !(
                  e &&
                  (("click" === e.type &&
                    /input|textarea/i.test(e.target.tagName)) ||
                    ("keyup" === e.type && 9 === e.which)) &&
                  i.default.contains(a, e.target)
                )
              ) {
                var f = i.default.Event(te, l);
                i.default(a).trigger(f),
                  f.isDefaultPrevented() ||
                    ("ontouchstart" in document.documentElement &&
                      i
                        .default(document.body)
                        .children()
                        .off("mouseover", null, i.default.noop),
                    n[o].setAttribute("aria-expanded", "false"),
                    s._popper && s._popper.destroy(),
                    i.default(u).removeClass(Jt),
                    i
                      .default(a)
                      .removeClass(Jt)
                      .trigger(i.default.Event(ee, l)));
              }
            }
          }
      }),
      (t._getParentFromElement = function (t) {
        var e,
          n = u.getSelectorFromElement(t);
        return n && (e = document.querySelector(n)), e || t.parentNode;
      }),
      (t._dataApiKeydownHandler = function (e) {
        if (
          !(/input|textarea/i.test(e.target.tagName)
            ? 32 === e.which ||
              (27 !== e.which &&
                ((40 !== e.which && 38 !== e.which) ||
                  i.default(e.target).closest(re).length))
            : !Gt.test(e.which)) &&
          !this.disabled &&
          !i.default(this).hasClass($t)
        ) {
          var n = t._getParentFromElement(this),
            o = i.default(n).hasClass(Jt);
          if (o || 27 !== e.which) {
            if (
              (e.preventDefault(),
              e.stopPropagation(),
              !o || 27 === e.which || 32 === e.which)
            )
              return (
                27 === e.which &&
                  i.default(n.querySelector(oe)).trigger("focus"),
                void i.default(this).trigger("click")
              );
            var r = [].slice
              .call(
                n.querySelectorAll(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                )
              )
              .filter(function (t) {
                return i.default(t).is(":visible");
              });
            if (0 !== r.length) {
              var a = r.indexOf(e.target);
              38 === e.which && a > 0 && a--,
                40 === e.which && a < r.length - 1 && a++,
                a < 0 && (a = 0),
                r[a].focus();
            }
          }
        }
      }),
      r(t, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.6.2";
          },
        },
        {
          key: "Default",
          get: function () {
            return ae;
          },
        },
        {
          key: "DefaultType",
          get: function () {
            return se;
          },
        },
      ]),
      t
    );
  })();
i
  .default(document)
  .on(ie, oe, le._dataApiKeydownHandler)
  .on(ie, re, le._dataApiKeydownHandler)
  .on(ne + " keyup.bs.dropdown.data-api", le._clearMenus)
  .on(ne, oe, function (t) {
    t.preventDefault(),
      t.stopPropagation(),
      le._jQueryInterface.call(i.default(this), "toggle");
  })
  .on(ne, ".dropdown form", function (t) {
    t.stopPropagation();
  }),
  (i.default.fn[zt] = le._jQueryInterface),
  (i.default.fn[zt].Constructor = le),
  (i.default.fn[zt].noConflict = function () {
    return (i.default.fn[zt] = Xt), le._jQueryInterface;
  });
var ue = "bs.modal",
  fe = i.default.fn.modal,
  de = "modal-open",
  ce = "fade",
  he = "show",
  pe = "modal-static",
  me = "hidden.bs.modal",
  ge = "show.bs.modal",
  _e = "focusin.bs.modal",
  ve = "resize.bs.modal",
  be = "click.dismiss.bs.modal",
  ye = "keydown.dismiss.bs.modal",
  Ee = "mousedown.dismiss.bs.modal",
  we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  Te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
  Ce = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean",
  },
  Se = (function () {
    function t(t, e) {
      (this._config = this._getConfig(e)),
        (this._element = t),
        (this._dialog = t.querySelector(".modal-dialog")),
        (this._backdrop = null),
        (this._isShown = !1),
        (this._isBodyOverflowing = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollbarWidth = 0);
    }
    var e = t.prototype;
    return (
      (e.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }),
      (e.show = function (t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          var n = i.default.Event(ge, { relatedTarget: t });
          i.default(this._element).trigger(n),
            n.isDefaultPrevented() ||
              ((this._isShown = !0),
              i.default(this._element).hasClass(ce) &&
                (this._isTransitioning = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              i
                .default(this._element)
                .on(be, '[data-dismiss="modal"]', function (t) {
                  return e.hide(t);
                }),
              i.default(this._dialog).on(Ee, function () {
                i.default(e._element).one(
                  "mouseup.dismiss.bs.modal",
                  function (t) {
                    i.default(t.target).is(e._element) &&
                      (e._ignoreBackdropClick = !0);
                  }
                );
              }),
              this._showBackdrop(function () {
                return e._showElement(t);
              }));
        }
      }),
      (e.hide = function (t) {
        var e = this;
        if (
          (t && t.preventDefault(), this._isShown && !this._isTransitioning)
        ) {
          var n = i.default.Event("hide.bs.modal");
          if (
            (i.default(this._element).trigger(n),
            this._isShown && !n.isDefaultPrevented())
          ) {
            this._isShown = !1;
            var o = i.default(this._element).hasClass(ce);
            if (
              (o && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              i.default(document).off(_e),
              i.default(this._element).removeClass(he),
              i.default(this._element).off(be),
              i.default(this._dialog).off(Ee),
              o)
            ) {
              var r = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, function (t) {
                  return e._hideModal(t);
                })
                .emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }),
      (e.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return i.default(t).off(".bs.modal");
        }),
          i.default(document).off(_e),
          i.default.removeData(this._element, ue),
          (this._config = null),
          (this._element = null),
          (this._dialog = null),
          (this._backdrop = null),
          (this._isShown = null),
          (this._isBodyOverflowing = null),
          (this._ignoreBackdropClick = null),
          (this._isTransitioning = null),
          (this._scrollbarWidth = null);
      }),
      (e.handleUpdate = function () {
        this._adjustDialog();
      }),
      (e._getConfig = function (t) {
        return (t = a({}, Te, t)), u.typeCheckConfig("modal", t, Ce), t;
      }),
      (e._triggerBackdropTransition = function () {
        var t = this,
          e = i.default.Event("hidePrevented.bs.modal");
        if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
          var n =
            this._element.scrollHeight > document.documentElement.clientHeight;
          n || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(pe);
          var o = u.getTransitionDurationFromElement(this._dialog);
          i.default(this._element).off(u.TRANSITION_END),
            i
              .default(this._element)
              .one(u.TRANSITION_END, function () {
                t._element.classList.remove(pe),
                  n ||
                    i
                      .default(t._element)
                      .one(u.TRANSITION_END, function () {
                        t._element.style.overflowY = "";
                      })
                      .emulateTransitionEnd(t._element, o);
              })
              .emulateTransitionEnd(o),
            this._element.focus();
        }
      }),
      (e._showElement = function (t) {
        var e = this,
          n = i.default(this._element).hasClass(ce),
          o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          i.default(this._dialog).hasClass("modal-dialog-scrollable") && o
            ? (o.scrollTop = 0)
            : (this._element.scrollTop = 0),
          n && u.reflow(this._element),
          i.default(this._element).addClass(he),
          this._config.focus && this._enforceFocus();
        var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
          a = function () {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              i.default(e._element).trigger(r);
          };
        if (n) {
          var s = u.getTransitionDurationFromElement(this._dialog);
          i.default(this._dialog)
            .one(u.TRANSITION_END, a)
            .emulateTransitionEnd(s);
        } else a();
      }),
      (e._enforceFocus = function () {
        var t = this;
        i.default(document)
          .off(_e)
          .on(_e, function (e) {
            document !== e.target &&
              t._element !== e.target &&
              0 === i.default(t._element).has(e.target).length &&
              t._element.focus();
          });
      }),
      (e._setEscapeEvent = function () {
        var t = this;
        this._isShown
          ? i.default(this._element).on(ye, function (e) {
              t._config.keyboard && 27 === e.which
                ? (e.preventDefault(), t.hide())
                : t._config.keyboard ||
                  27 !== e.which ||
                  t._triggerBackdropTransition();
            })
          : this._isShown || i.default(this._element).off(ye);
      }),
      (e._setResizeEvent = function () {
        var t = this;
        this._isShown
          ? i.default(window).on(ve, function (e) {
              return t.handleUpdate(e);
            })
          : i.default(window).off(ve);
      }),
      (e._hideModal = function () {
        var t = this;
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._showBackdrop(function () {
            i.default(document.body).removeClass(de),
              t._resetAdjustments(),
              t._resetScrollbar(),
              i.default(t._element).trigger(me);
          });
      }),
      (e._removeBackdrop = function () {
        this._backdrop &&
          (i.default(this._backdrop).remove(), (this._backdrop = null));
      }),
      (e._showBackdrop = function (t) {
        var e = this,
          n = i.default(this._element).hasClass(ce) ? ce : "";
        if (this._isShown && this._config.backdrop) {
          if (
            ((this._backdrop = document.createElement("div")),
            (this._backdrop.className = "modal-backdrop"),
            n && this._backdrop.classList.add(n),
            i.default(this._backdrop).appendTo(document.body),
            i.default(this._element).on(be, function (t) {
              e._ignoreBackdropClick
                ? (e._ignoreBackdropClick = !1)
                : t.target === t.currentTarget &&
                  ("static" === e._config.backdrop
                    ? e._triggerBackdropTransition()
                    : e.hide());
            }),
            n && u.reflow(this._backdrop),
            i.default(this._backdrop).addClass(he),
            !t)
          )
            return;
          if (!n) return void t();
          var o = u.getTransitionDurationFromElement(this._backdrop);
          i.default(this._backdrop)
            .one(u.TRANSITION_END, t)
            .emulateTransitionEnd(o);
        } else if (!this._isShown && this._backdrop) {
          i.default(this._backdrop).removeClass(he);
          var r = function () {
            e._removeBackdrop(), t && t();
          };
          if (i.default(this._element).hasClass(ce)) {
            var a = u.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(u.TRANSITION_END, r)
              .emulateTransitionEnd(a);
          } else r();
        } else t && t();
      }),
      (e._adjustDialog = function () {
        var t =
          this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing &&
          t &&
          (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
          this._isBodyOverflowing &&
            !t &&
            (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }),
      (e._resetAdjustments = function () {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }),
      (e._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        (this._isBodyOverflowing =
          Math.round(t.left + t.right) < window.innerWidth),
          (this._scrollbarWidth = this._getScrollbarWidth());
      }),
      (e._setScrollbar = function () {
        var t = this;
        if (this._isBodyOverflowing) {
          var e = [].slice.call(document.querySelectorAll(we)),
            n = [].slice.call(document.querySelectorAll(".sticky-top"));
          i.default(e).each(function (e, n) {
            var o = n.style.paddingRight,
              r = i.default(n).css("padding-right");
            i.default(n)
              .data("padding-right", o)
              .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
          }),
            i.default(n).each(function (e, n) {
              var o = n.style.marginRight,
                r = i.default(n).css("margin-right");
              i.default(n)
                .data("margin-right", o)
                .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
            });
          var o = document.body.style.paddingRight,
            r = i.default(document.body).css("padding-right");
          i.default(document.body)
            .data("padding-right", o)
            .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
        }
        i.default(document.body).addClass(de);
      }),
      (e._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(we));
        i.default(t).each(function (t, e) {
          var n = i.default(e).data("padding-right");
          i.default(e).removeData("padding-right"),
            (e.style.paddingRight = n || "");
        });
        var e = [].slice.call(document.querySelectorAll(".sticky-top"));
        i.default(e).each(function (t, e) {
          var n = i.default(e).data("margin-right");
          "undefined" != typeof n &&
            i.default(e).css("margin-right", n).removeData("margin-right");
        });
        var n = i.default(document.body).data("padding-right");
        i.default(document.body).removeData("padding-right"),
          (document.body.style.paddingRight = n || "");
      }),
      (e._getScrollbarWidth = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }),
      (t._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = i.default(this).data(ue),
            r = a(
              {},
              Te,
              i.default(this).data(),
              "object" == typeof e && e ? e : {}
            );
          if (
            (o || ((o = new t(this, r)), i.default(this).data(ue, o)),
            "string" == typeof e)
          ) {
            if ("undefined" == typeof o[e])
              throw new TypeError('No method named "' + e + '"');
            o[e](n);
          } else r.show && o.show(n);
        });
      }),
      r(t, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.6.2";
          },
        },
        {
          key: "Default",
          get: function () {
            return Te;
          },
        },
      ]),
      t
    );
  })();
i
  .default(document)
  .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e,
      n = this,
      o = u.getSelectorFromElement(this);
    o && (e = document.querySelector(o));
    var r = i.default(e).data(ue)
      ? "toggle"
      : a({}, i.default(e).data(), i.default(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
    var s = i.default(e).one(ge, function (t) {
      t.isDefaultPrevented() ||
        s.one(me, function () {
          i.default(n).is(":visible") && n.focus();
        });
    });
    Se._jQueryInterface.call(i.default(e), r, this);
  }),
  (i.default.fn.modal = Se._jQueryInterface),
  (i.default.fn.modal.Constructor = Se),
  (i.default.fn.modal.noConflict = function () {
    return (i.default.fn.modal = fe), Se._jQueryInterface;
  });

function darkmode99(event) {
  var btag = document.getElementById("body734");
  btag.classList.toggle("dark");
}
window.onclick = function (event) {
  var btag = document.getElementById("body734");
  if (!target.matches(".checkbox")) {
    var darktheme = document.getElementById("body734");
    var i;
    for (i = 0; i < darktheme.length; i++) {
      var darkthemexxx = darktheme[i];
      if (darkthemexxx.classList.contains("dark")) {
        darkthemexxx.classList.remove("dark");
      }
    }
  }
};
