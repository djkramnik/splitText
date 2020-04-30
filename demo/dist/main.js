!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function(e, t, n) {
    'use strict';
    var r =
        (this && this.__awaiter) ||
        function(e, t, n, r) {
          return new (n || (n = Promise))(function(o, i) {
            function u(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function(e) {
                        e(t);
                      })).then(u, c);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function(e, t) {
          var n,
            r,
            o,
            i,
            u = {
              label: 0,
              sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            'function' == typeof Symbol &&
              (i[Symbol.iterator] = function() {
                return this;
              }),
            i
          );
          function c(i) {
            return function(c) {
              return (function(i) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; u; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return u.label++, { value: i[1], done: !1 };
                      case 5:
                        u.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          u.label = i[1];
                          break;
                        }
                        if (6 === i[0] && u.label < o[1]) {
                          (u.label = o[1]), (o = i);
                          break;
                        }
                        if (o && u.label < o[2]) {
                          (u.label = o[2]), u.ops.push(i);
                          break;
                        }
                        o[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    i = t.call(e, u);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, c]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = n(2);
    t.default = function(e, t) {
      return r(void 0, void 0, void 0, function() {
        var n, u, c;
        return o(this, function(a) {
          switch (a.label) {
            case 0:
              return (n = e.innerText)
                ? ((u = i.tokenizeEl(e)),
                  (e.innerText = ''),
                  e.appendChild(u),
                  [
                    4,
                    r(void 0, void 0, void 0, function() {
                      return o(this, function(e) {
                        return [
                          2,
                          new Promise(function(e) {
                            return window.setTimeout(e, 0);
                          }),
                        ];
                      });
                    }),
                  ])
                : [2];
            case 1:
              return (
                a.sent(),
                (c = i.getLineElements(i.getLines(e), t ? t.markup : void 0)),
                (e.innerHTML = ''),
                e.appendChild(c),
                [
                  2,
                  function() {
                    (e.innerHTML = ''), (e.innerText = n);
                  },
                ]
              );
          }
        });
      });
    };
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r = n(0),
      o = n.n(r);
    o()(document.querySelector('#quote-basic')).then(e => {
      const t = document.querySelector('#quote-basic-btn');
      t.removeAttribute('disabled'), t.addEventListener('click', e);
    }),
      o()(document.querySelector('#quote-markup'), {
        markup:
          '<div class="stagger-line"><div class="stagger-line__inner">{slot}</div></div>',
      }).then(e => {
        const t = document.querySelector('#quote-markup-btn');
        t.removeAttribute('disabled'), t.addEventListener('click', e);
      });
  },
  function(e, t, n) {
    'use strict';
    var r =
      (this && this.__assign) ||
      function() {
        return (r =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.tokenizeEl = function(e) {
        var t = document.createDocumentFragment(),
          n = e.textContent;
        return (
          'string' == typeof n &&
            n.split(/\s/).forEach(function(e) {
              var n = document.createElement('span');
              (n.textContent = e + ' '), t.appendChild(n);
            }),
          t
        );
      }),
      (t.getLines = function(e) {
        return Array.from(e.children).reduce(function(e, t) {
          var n;
          return t instanceof HTMLElement
            ? r(
                r({}, e),
                (((n = {})[t.offsetTop] = e[t.offsetTop]
                  ? e[t.offsetTop].concat(t.innerText.trim())
                  : [t.innerText.trim()]),
                n)
              )
            : e;
        }, {});
      }),
      (t.getLineElements = function(e, t) {
        var n = document.createDocumentFragment();
        return (
          Object.keys(e)
            .sort(function(e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            })
            .forEach(function(r) {
              if ('string' == typeof t) {
                var o = new DOMParser().parseFromString(
                  t.replace('{slot}', e[r].join(' ')),
                  'text/html'
                );
                n.appendChild(o.body.children[0]);
              } else {
                var i = document.createElement('div');
                (i.style.display = 'block'),
                  (i.style.textAlign = 'start'),
                  (i.style.position = 'relative'),
                  (i.textContent = e[r].join(' ')),
                  n.appendChild(i);
              }
            }),
          n
        );
      });
  },
]);
