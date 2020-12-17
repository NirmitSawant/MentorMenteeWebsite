function vc_js() {
    /* nectar addition */ 
     /*
      vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), 
      vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500) */
       /* nectar addition end */ 
  }
  document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
      function() {
          for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
      }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
          ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
              var this_element = jQuery(this),
                  sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
                  sliderFx = this_element.attr("data-flex_fx"),
                  slideshow = !0;
              0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                  animation: sliderFx,
                  slideshow: slideshow,
                  slideshowSpeed: sliderTimeout,
                  sliderSpeed: 800,
                  smoothHeight: !0
              })
          })
      }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
          0 < jQuery(".wpb_googleplus").length && function() {
              var po = document.createElement("script");
              po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s)
          }()
      }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
          0 < jQuery(".wpb_pinterest").length && function() {
              var po = document.createElement("script");
              po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(po, s)
          }()
      }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
          void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
              jQuery(this).find(".vc_single_bar").each(function(index) {
                  var bar = jQuery(this).find(".vc_bar"),
                      val = bar.data("percentage-value");
                  setTimeout(function() {
                      bar.css({
                          width: val + "%"
                      })
                  }, 200 * index)
              })
          }, {
              offset: "85%"
          })
      }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
          void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
              jQuery(this).addClass("wpb_start_animation animated")
          }, {
              offset: "85%"
          })
      }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
          function event(e) {
              e && e.preventDefault && e.preventDefault();
              var element = jQuery(this).closest(".vc_toggle"),
                  content = element.find(".vc_toggle_content");
              element.hasClass("vc_toggle_active") ? content.slideUp({
                  duration: 300,
                  complete: function() {
                      element.removeClass("vc_toggle_active")
                  }
              }) : content.slideDown({
                  duration: 300,
                  complete: function() {
                      element.addClass("vc_toggle_active")
                  }
              })
          }
          $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
      }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
          if (jQuery.ui) {
              var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                  ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                  old_version = 1 === parseInt(ver[0]) && parseInt(ver[1]) < 9;
              $call.each(function(index) {
                  var $tabs, interval = jQuery(this).attr("data-interval"),
                      tabs_array = [];
                  if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                          show: function(event, ui) {
                              wpb_prepare_tab_content(event, ui)
                          },
                          beforeActivate: function(event, ui) {
                              1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                          },
                          activate: function(event, ui) {
                              wpb_prepare_tab_content(event, ui)
                          }
                      }), interval && 0 < interval) try {
                      $tabs.tabs("rotate", 1e3 * interval)
                  } catch (e) {
                      window.console && window.console.warn && console.warn(e)
                  }
                  jQuery(this).find(".wpb_tab").each(function() {
                      tabs_array.push(this.id)
                  }), jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
                      return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                  }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
                      if (e.preventDefault(), old_version) {
                          var index = $tabs.tabs("option", "selected");
                          jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
                      } else {
                          index = $tabs.tabs("option", "active");
                          var length = $tabs.find(".wpb_tab").length;
                          index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
                      }
                  })
              })
          }
      }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
          jQuery(".wpb_accordion").each(function(index) {
              var $tabs, $this = jQuery(this),
                  active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
                  collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
              $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                  header: "> div > h3",
                  autoHeight: !1,
                  heightStyle: "content",
                  active: active_tab,
                  collapsible: collapsible,
                  navigation: !0,
                  activate: vc_accordionActivate,
                  change: function(event, ui) {
                      void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                  }
              }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
          })
      }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
          var layout_modes = {
              fitrows: "fitRows",
              masonry: "masonry"
          };
          jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
              var $container = jQuery(this),
                  $thumbs = $container.find(".wpb_thumbnails"),
                  layout_mode = $thumbs.attr("data-layout-mode");
              $thumbs.isotope({
                  itemSelector: ".isotope-item",
                  layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
              }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
                  e.preventDefault();
                  var $thumbs = jQuery(this).data("isotope");
                  jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                      filter: jQuery(this).attr("data-filter")
                  })
              }), jQuery(window).bind("load resize", function() {
                  $thumbs.isotope("layout")
              })
          })
      }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
          ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
              var $this = jQuery(this);
              if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                  $this.data("carousel_enabled", !0);
                  getColumnsCount(jQuery(this));
                  jQuery(this).hasClass("columns_count_1") && 900;
                  var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                  carousele_li.css({
                      "margin-right": carousele_li.css("margin-left"),
                      "margin-left": 0
                  });
                  var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                  fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function() {
                      screen_size != (screen_size = getSizeName()) && window.setTimeout("location.reload()", 20)
                  })
              }
          })
      }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
          jQuery(".wpb_gallery_slides").each(function(index) {
              var $imagesGrid, this_element = jQuery(this);
              if (this_element.hasClass("wpb_slider_nivo")) {
                  var sliderTimeout = 1e3 * this_element.attr("data-interval");
                  0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                      effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                      slices: 15,
                      boxCols: 8,
                      boxRows: 4,
                      animSpeed: 800,
                      pauseTime: sliderTimeout,
                      startSlide: 0,
                      directionNav: !0,
                      directionNavHide: !0,
                      controlNav: !0,
                      keyboardNav: !1,
                      pauseOnHover: !0,
                      manualAdvance: !1,
                      prevText: "Prev",
                      nextText: "Next"
                  })
              } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                  $imagesGrid.isotope({
                      itemSelector: ".isotope-item",
                      layoutMode: "fitRows"
                  })
              }) : this_element.find(".wpb_image_grid_ul").isotope({
                  itemSelector: ".isotope-item",
                  layoutMode: "fitRows"
              }))
          })
      }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
          try {
              jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                  animationSpeed: "normal",
                  hook: "data-rel",
                  padding: 15,
                  opacity: .7,
                  showTitle: !0,
                  allowresize: !0,
                  counter_separator_label: "/",
                  hideflash: !1,
                  deeplinking: !1,
                  modal: !1,
                  callback: function() {
                      -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                  },
                  social_tools: ""
              })
          } catch (err) {
              window.console && window.console.warn && console.warn(err)
          }
      }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
          return !1
      }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
          var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;
  
          function fullWidthRow() {
              var $elements = $('[data-vc-full-width="true"]');
              $.each($elements, function(key, item) {
                  var $el = $(this);
                  $el.addClass("vc_hidden");
                  var $el_full = $el.next(".vc_row-full-width");
                  if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                      var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                          el_margin_right = parseInt($el.css("margin-right"), 10),
                          offset = 0 - $el_full.offset().left - el_margin_left,
                          width = $(window).width();
                      if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                              position: "relative",
                              left: offset,
                              "box-sizing": "border-box",
                              width: width
                          }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                          "padding-left": padding + "px",
                          "padding-right": paddingRight + "px"
                      });
                      $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                          el: $el,
                          offset: offset,
                          marginLeft: el_margin_left,
                          marginRight: el_margin_right,
                          elFull: $el_full,
                          width: width
                      })
                  }
              }), $(document).trigger("vc-full-width-row", $elements)
          }
  
          function fullHeightRow() {
              var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
              $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
              $(document).trigger("vc-full-height-row", $element)
          }
          $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
              "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
          }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
              var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
              callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), (youtubeId = vcExtractYoutubeId(parallaxImage = $(this).data("vcParallaxImage"))) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
          }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
              forceHeight: !1,
              smoothScrolling: !1,
              mobileCheck: function() {
                  return !1
              }
          }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
      }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
          jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
      }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
          for (var find = !1, i = 1; !1 === find;) {
              if (el.hasClass("columns_count_" + i)) return find = !0, i;
              i++
          }
      });
  var screen_size = getSizeName();
  
  function getSizeName() {
      var screen_w = jQuery(window).width();
      return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
  }
  
  function loadScript(url, $obj, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript", script.readyState && (script.onreadystatechange = function() {
          "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
      }), script.src = url, $obj.get(0).appendChild(script)
  }
  
  function vc_ttaActivation() {
      jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
          var $ = window.jQuery,
              ui = {};
          ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
      })
  }
  
  function vc_accordionActivate(event, ui) {
      if (ui.newPanel.length && ui.newHeader.length) {
          var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
              $round_charts = ui.newPanel.find(".vc_round-chart"),
              $line_charts = ui.newPanel.find(".vc_line-chart"),
              $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
          void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
              var grid = jQuery(this).data("vcGrid");
              grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
          }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
              reload: !1
          }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
              reload: !1
          }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
              jQuery(this).isotope("layout")
          })
      }
  }
  
  function initVideoBackgrounds() {
      return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
  }
  
  function vc_initVideoBackgrounds() {
      jQuery("[data-vc-video-bg]").each(function() {
          var youtubeId, $element = jQuery(this);
          $element.data("vcVideoBg") ? ((youtubeId = vcExtractYoutubeId($element.data("vcVideoBg"))) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
              $element.has($grid).length && vcResizeVideoBackground($element)
          })) : $element.find(".vc_video-bg").remove()
      })
  }
  
  function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
      if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
          insertYoutubeVideoAsBackground($element, youtubeId, counter++)
      }, 100);
      var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
      new YT.Player($container[0], {
          width: "100%",
          height: "100%",
          videoId: youtubeId,
          playerVars: {
              playlist: youtubeId,
              iv_load_policy: 3,
              enablejsapi: 1,
              disablekb: 1,
              autoplay: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              loop: 1,
              wmode: "transparent"
          },
          events: {
              onReady: function(event) {
                  event.target.mute().setLoop(!0)
              }
          }
      }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
          vcResizeVideoBackground($element)
      })
  }
  
  function vcResizeVideoBackground($element) {
      var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
          containerH = $element.innerHeight();
      containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
          maxWidth: "1000%",
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: iframeW,
          height: iframeH
      })
  }
  
  function vcExtractYoutubeId(url) {
      if (void 0 === url) return !1;
      var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
      return null !== id && id[1]
  }
  if ("function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
          var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
              $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
              $round_charts = panel.find(".vc_round-chart"),
              $line_charts = panel.find(".vc_line-chart"),
              $carousel = panel.find('[data-ride="vc_carousel"]');
          if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                  var grid = jQuery(this).data("vcGrid");
                  grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
              }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                  var grid = jQuery(this).data("vcGrid");
                  grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
              }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                  reload: !1
              }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                  reload: !1
              }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
              var $frame = $google_maps.find("iframe");
              $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
          }
          panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
              jQuery(this).isotope("layout")
          })
      }), "function" != typeof window.vc_googleMapsPointer)
  function vc_googleMapsPointer() {
      var $ = window.jQuery,
          $wpbGmapsWidget = $(".wpb_gmaps_widget");
      $wpbGmapsWidget.click(function() {
          $("iframe", this).css("pointer-events", "auto")
      }), $wpbGmapsWidget.mouseleave(function() {
          $("iframe", this).css("pointer-events", "none")
      }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
  }
  
  function vc_setHoverBoxPerspective(hoverBox) {
      hoverBox.each(function() {
          var $this = jQuery(this),
              perspective = 4 * $this.width() + "px";
          $this.css("perspective", perspective)
      })
  }
  
  function vc_setHoverBoxHeight(hoverBox) {
      hoverBox.each(function() {
          var $this = jQuery(this),
              hoverBoxInner = $this.find(".vc-hoverbox-inner");
          hoverBoxInner.css("min-height", 0);
          var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
              backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
              hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
          hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
      })
  }
  
  function vc_prepareHoverBox() {
      var hoverBox = jQuery(".vc-hoverbox");
      vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
  }
  jQuery(document).ready(vc_prepareHoverBox), jQuery(window).resize(vc_prepareHoverBox), jQuery(document).ready(function($) {
      window.vc_js()
  });



//============================================================
//
// The MIT License
//
// Copyright (C) 2014 Matthew Wagerfield - @wagerfield
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute,
// sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
// OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
// AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
// OR OTHER DEALINGS IN THE SOFTWARE.
//
//============================================================

/**
 * jQuery || Zepto Parallax Plugin
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 */
;(function($, window, document, undefined) {

    // Strict Mode
    'use strict';
  
    // Constants
    var NAME = 'parallax';
    var MAGIC_NUMBER = 30;
    var DEFAULTS = {
      relativeInput: false,
      clipRelativeInput: false,
      calibrationThreshold: 100,
      calibrationDelay: 500,
      supportDelay: 500,
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 10.0,
      scalarY: 10.0,
      frictionX: 0.1,
      frictionY: 0.1,
      originX: 0.5,
      originY: 0.5
    };
  
    function Plugin(element, options) {
  
      // DOM Context
      this.element = element;
  
      // Selections
      this.$context = $(element).data('api', this);
      this.$layers = this.$context.find('.layer');
  
      // Data Extraction
      var data = {
        calibrateX: this.$context.data('calibrate-x') || null,
        calibrateY: this.$context.data('calibrate-y') || null,
        invertX: this.$context.data('invert-x') || null,
        invertY: this.$context.data('invert-y') || null,
        limitX: parseFloat(this.$context.data('limit-x')) || null,
        limitY: parseFloat(this.$context.data('limit-y')) || null,
        scalarX: parseFloat(this.$context.data('scalar-x')) || null,
        scalarY: parseFloat(this.$context.data('scalar-y')) || null,
        frictionX: parseFloat(this.$context.data('friction-x')) || null,
        frictionY: parseFloat(this.$context.data('friction-y')) || null,
        originX: parseFloat(this.$context.data('origin-x')) || null,
        originY: parseFloat(this.$context.data('origin-y')) || null
      };
  
      // Delete Null Data Values
      for (var key in data) {
        if (data[key] === null) delete data[key];
      }
  
      // Compose Settings Object
      $.extend(this, DEFAULTS, options, data);
  
      // States
      this.calibrationTimer = null;
      this.calibrationFlag = true;
      this.enabled = false;
      this.depths = [];
      this.raf = null;
  
      // Element Bounds
      this.bounds = null;
      this.ex = 0;
      this.ey = 0;
      this.ew = 0;
      this.eh = 0;
  
      // Element Center
      this.ecx = 0;
      this.ecy = 0;
  
      // Element Range
      this.erx = 0;
      this.ery = 0;
  
      // Calibration
      this.cx = 0;
      this.cy = 0;
  
      // Input
      this.ix = 0;
      this.iy = 0;
  
      // Motion
      this.mx = 0;
      this.my = 0;
  
      // Velocity
      this.vx = 0;
      this.vy = 0;
  
      // Callbacks
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
      this.onOrientationTimer = this.onOrientationTimer.bind(this);
      this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
      this.onAnimationFrame = this.onAnimationFrame.bind(this);
      this.onWindowResize = this.onWindowResize.bind(this);
  
      // Initialise
      this.initialise();
    }
  
    Plugin.prototype.transformSupport = function(value) {
      var element = document.createElement('div');
      var propertySupport = false;
      var propertyValue = null;
      var featureSupport = false;
      var cssProperty = null;
      var jsProperty = null;
      for (var i = 0, l = this.vendors.length; i < l; i++) {
        if (this.vendors[i] !== null) {
          cssProperty = this.vendors[i][0] + 'transform';
          jsProperty = this.vendors[i][1] + 'Transform';
        } else {
          cssProperty = 'transform';
          jsProperty = 'transform';
        }
        if (element.style[jsProperty] !== undefined) {
          propertySupport = true;
          break;
        }
      }
      switch(value) {
        case '2D':
          featureSupport = propertySupport;
          break;
        case '3D':
          if (propertySupport) {
            var body = document.body || document.createElement('body');
            var documentElement = document.documentElement;
            var documentOverflow = documentElement.style.overflow;
            if (!document.body) {
              documentElement.style.overflow = 'hidden';
              documentElement.appendChild(body);
              body.style.overflow = 'hidden';
              body.style.background = '';
            }
            body.appendChild(element);
            element.style[jsProperty] = 'translate3d(1px,1px,1px)';
            propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
            featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
            documentElement.style.overflow = documentOverflow;
            body.removeChild(element);
          }
          break;
      }
      return featureSupport;
    };
  
    Plugin.prototype.ww = null;
    Plugin.prototype.wh = null;
    Plugin.prototype.wcx = null;
    Plugin.prototype.wcy = null;
    Plugin.prototype.wrx = null;
    Plugin.prototype.wry = null;
    Plugin.prototype.portrait = null;
    Plugin.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    Plugin.prototype.vendors = [null,['-webkit-','webkit'],['-moz-','Moz'],['-o-','O'],['-ms-','ms']];
    Plugin.prototype.motionSupport = !!window.DeviceMotionEvent;
    Plugin.prototype.orientationSupport = !!window.DeviceOrientationEvent;
    Plugin.prototype.orientationStatus = 0;
    Plugin.prototype.transform2DSupport = Plugin.prototype.transformSupport('2D');
    Plugin.prototype.transform3DSupport = Plugin.prototype.transformSupport('3D');
    Plugin.prototype.propertyCache = {};
  
    Plugin.prototype.initialise = function() {
  
      // Configure Styles
      if (this.$context.css('position') === 'static') {
        this.$context.css({
          position:'relative'
        });
      }
  
      // Hardware Accelerate Context
      this.accelerate(this.$context);
  
      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    };
  
    Plugin.prototype.updateLayers = function() {
  
      // Cache Layer Elements
      this.$layers = this.$context.find('.layer');
      this.depths = [];
  
      // Configure Layer Styles
      this.$layers.css({
        position:'absolute',
        display:'block',
        left: 0,
        top: 0
      });
      this.$layers.first().css({
        position:'relative'
      });
  
      // Hardware Accelerate Layers
      this.accelerate(this.$layers);
  
      // Cache Depths
      this.$layers.each($.proxy(function(index, element) {
        this.depths.push($(element).data('depth') || 0);
      }, this));
    };
  
    Plugin.prototype.updateDimensions = function() {
      this.ww = window.innerWidth;
      this.wh = window.innerHeight;
      this.wcx = this.ww * this.originX;
      this.wcy = this.wh * this.originY;
      this.wrx = Math.max(this.wcx, this.ww - this.wcx);
      this.wry = Math.max(this.wcy, this.wh - this.wcy);
    };
  
    Plugin.prototype.updateBounds = function() {
      this.bounds = this.element.getBoundingClientRect();
      this.ex = this.bounds.left;
      this.ey = this.bounds.top;
      this.ew = this.bounds.width;
      this.eh = this.bounds.height;
      this.ecx = this.ew * this.originX;
      this.ecy = this.eh * this.originY;
      this.erx = Math.max(this.ecx, this.ew - this.ecx);
      this.ery = Math.max(this.ecy, this.eh - this.ecy);
    };
  
    Plugin.prototype.queueCalibration = function(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    };
  
    Plugin.prototype.enable = function() {
      if (!this.enabled) {
        this.enabled = true;
        if (this.orientationSupport) {
          this.portrait = null;
          window.addEventListener('deviceorientation', this.onDeviceOrientation);
          setTimeout(this.onOrientationTimer, this.supportDelay);
        } else {
          this.cx = 0;
          this.cy = 0;
          this.portrait = false;
          window.addEventListener('mousemove', this.onMouseMove);
        }
        window.addEventListener('resize', this.onWindowResize);
        this.raf = requestAnimationFrame(this.onAnimationFrame);
      }
    };
  
    Plugin.prototype.disable = function() {
      if (this.enabled) {
        this.enabled = false;
        if (this.orientationSupport) {
          window.removeEventListener('deviceorientation', this.onDeviceOrientation);
        } else {
          window.removeEventListener('mousemove', this.onMouseMove);
        }
        window.removeEventListener('resize', this.onWindowResize);
        cancelAnimationFrame(this.raf);
      }
    };
  
    Plugin.prototype.calibrate = function(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    };
  
    Plugin.prototype.invert = function(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    };
  
    Plugin.prototype.friction = function(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    };
  
    Plugin.prototype.scalar = function(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    };
  
    Plugin.prototype.limit = function(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    };
  
    Plugin.prototype.origin = function(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    };
  
    Plugin.prototype.clamp = function(value, min, max) {
      value = Math.max(value, min);
      value = Math.min(value, max);
      return value;
    };
  
    Plugin.prototype.css = function(element, property, value) {
      var jsProperty = this.propertyCache[property];
      if (!jsProperty) {
        for (var i = 0, l = this.vendors.length; i < l; i++) {
          if (this.vendors[i] !== null) {
            jsProperty = $.camelCase(this.vendors[i][1] + '-' + property);
          } else {
            jsProperty = property;
          }
          if (element.style[jsProperty] !== undefined) {
            this.propertyCache[property] = jsProperty;
            break;
          }
        }
      }
      element.style[jsProperty] = value;
    };
  
    Plugin.prototype.accelerate = function($element) {
      for (var i = 0, l = $element.length; i < l; i++) {
        var element = $element[i];
        this.css(element, 'transform', 'translate3d(0,0,0)');
        this.css(element, 'transform-style', 'preserve-3d');
        this.css(element, 'backface-visibility', 'hidden');
      }
    };
  
    Plugin.prototype.setPosition = function(element, x, y) {
      x += 'px';
      y += 'px';
      if (this.transform3DSupport) {
        this.css(element, 'transform', 'translate3d('+x+','+y+',0)');
      } else if (this.transform2DSupport) {
        this.css(element, 'transform', 'translate('+x+','+y+')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    };
  
    Plugin.prototype.onOrientationTimer = function(event) {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      }
    };
  
    Plugin.prototype.onCalibrationTimer = function(event) {
      this.calibrationFlag = true;
    };
  
    Plugin.prototype.onWindowResize = function(event) {
      this.updateDimensions();
    };
  
    Plugin.prototype.onAnimationFrame = function() {
      this.updateBounds();
      var dx = this.ix - this.cx;
      var dy = this.iy - this.cy;
      if ((Math.abs(dx) > this.calibrationThreshold) || (Math.abs(dy) > this.calibrationThreshold)) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.mx = this.calibrateX ? dy : this.iy;
        this.my = this.calibrateY ? dx : this.ix;
      } else {
        this.mx = this.calibrateX ? dx : this.ix;
        this.my = this.calibrateY ? dy : this.iy;
      }
      this.mx *= this.ew * (this.scalarX / 100);
      this.my *= this.eh * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.my = this.clamp(this.my, -this.limitY, this.limitY);
      }
      this.vx += (this.mx - this.vx) * this.frictionX;
      this.vy += (this.my - this.vy) * this.frictionY;
      for (var i = 0, l = this.$layers.length; i < l; i++) {
        var depth = this.depths[i];
        var layer = this.$layers[i];
        var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
        var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = requestAnimationFrame(this.onAnimationFrame);
    };
  
    Plugin.prototype.onDeviceOrientation = function(event) {
  
      // Validate environment and event properties.
      if (!this.desktop && event.beta !== null && event.gamma !== null) {
  
        // Set orientation status.
        this.orientationStatus = 1;
  
        // Extract Rotation
        var x = (event.beta  || 0) / MAGIC_NUMBER; //  -90 :: 90
        var y = (event.gamma || 0) / MAGIC_NUMBER; // -180 :: 180
  
        // Detect Orientation Change
        var portrait = window.innerHeight > window.innerWidth;
        if (this.portrait !== portrait) {
          this.portrait = portrait;
          this.calibrationFlag = true;
        }
  
        // Set Calibration
        if (this.calibrationFlag) {
          this.calibrationFlag = false;
          this.cx = x;
          this.cy = y;
        }
  
        // Set Input
        this.ix = x;
        this.iy = y;
      }
    };
  
    Plugin.prototype.onMouseMove = function(event) {
  
      // Cache mouse coordinates.
      var clientX = event.clientX;
      var clientY = event.clientY;
  
      // Calculate Mouse Input
      if (!this.orientationSupport && this.relativeInput) {
  
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.ex);
          clientX = Math.min(clientX, this.ex + this.ew);
          clientY = Math.max(clientY, this.ey);
          clientY = Math.min(clientY, this.ey + this.eh);
        }
  
        // Calculate input relative to the element.
        this.ix = (clientX - this.ex - this.ecx) / this.erx;
        this.iy = (clientY - this.ey - this.ecy) / this.ery;
  
      } else {
  
        // Calculate input relative to the window.
        this.ix = (clientX - this.wcx) / this.wrx;
        this.iy = (clientY - this.wcy) / this.wry;
      }
    };
  
    var API = {
      enable: Plugin.prototype.enable,
      disable: Plugin.prototype.disable,
      updateLayers: Plugin.prototype.updateLayers,
      calibrate: Plugin.prototype.calibrate,
      friction: Plugin.prototype.friction,
      invert: Plugin.prototype.invert,
      scalar: Plugin.prototype.scalar,
      limit: Plugin.prototype.limit,
      origin: Plugin.prototype.origin
    };
  
    $.fn[NAME] = function (value) {
      var args = arguments;
      return this.each(function () {
        var $this = $(this);
        var plugin = $this.data(NAME);
        if (!plugin) {
          plugin = new Plugin(this, value);
          $this.data(NAME, plugin);
        }
        if (API[value]) {
          plugin[value].apply(plugin, Array.prototype.slice.call(args, 1));
        }
      });
    };
  
  })(window.jQuery || window.Zepto, window, document);
  
  /**
   * Request Animation Frame Polyfill.
   * @author Tino Zijdel
   * @author Paul Irish
   * @see https://gist.github.com/paulirish/1579671
   */
  ;(function() {
  
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
  
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
  
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
  
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
  
  }());