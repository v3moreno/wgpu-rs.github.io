var N = null;var sourcesIndex = {};
sourcesIndex["arrayvec"] = {"name":"","files":["array.rs","array_string.rs","char.rs","errors.rs","lib.rs","maybe_uninit.rs"]};
sourcesIndex["ash"] = {"name":"","dirs":[{"name":"extensions","dirs":[{"name":"experimental","files":["amd.rs","mod.rs"]},{"name":"ext","files":["debug_marker.rs","debug_report.rs","debug_utils.rs","metal_surface.rs","mod.rs"]},{"name":"khr","files":["android_surface.rs","display.rs","display_swapchain.rs","draw_indirect_count.rs","external_memory_fd.rs","mod.rs","push_descriptor.rs","ray_tracing.rs","surface.rs","swapchain.rs","timeline_semaphore.rs","wayland_surface.rs","win32_surface.rs","xcb_surface.rs","xlib_surface.rs"]},{"name":"mvk","files":["ios_surface.rs","macos_surface.rs","mod.rs"]},{"name":"nv","files":["mesh_shader.rs","mod.rs","ray_tracing.rs"]}],"files":["mod.rs"]},{"name":"vk","files":["aliases.rs","bitflags.rs","const_debugs.rs","constants.rs","definitions.rs","enums.rs","extensions.rs","feature_extensions.rs","features.rs","macros.rs","platform_types.rs"]}],"files":["device.rs","entry.rs","entry_libloading.rs","instance.rs","lib.rs","prelude.rs","util.rs","version.rs","vk.rs"]};
sourcesIndex["base64"] = {"name":"","dirs":[{"name":"read","files":["decoder.rs","mod.rs"]},{"name":"write","files":["encoder.rs","mod.rs"]}],"files":["chunked_encoder.rs","decode.rs","display.rs","encode.rs","lib.rs","tables.rs"]};
sourcesIndex["bit_set"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bit_vec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["copyless"] = {"name":"","files":["boxed.rs","lib.rs","vec.rs"]};
sourcesIndex["fixedbitset"] = {"name":"","files":["lib.rs","range.rs"]};
sourcesIndex["futures"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_channel"] = {"name":"","dirs":[{"name":"mpsc","files":["mod.rs","queue.rs","sink_impl.rs"]}],"files":["lib.rs","lock.rs","oneshot.rs"]};
sourcesIndex["futures_core"] = {"name":"","dirs":[{"name":"task","dirs":[{"name":"__internal","files":["atomic_waker.rs","mod.rs"]}],"files":["mod.rs","poll.rs"]}],"files":["future.rs","lib.rs","stream.rs"]};
sourcesIndex["futures_executor"] = {"name":"","files":["enter.rs","lib.rs","local_pool.rs"]};
sourcesIndex["futures_io"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_sink"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_task"] = {"name":"","files":["arc_wake.rs","future_obj.rs","lib.rs","noop_waker.rs","spawn.rs","waker.rs","waker_ref.rs"]};
sourcesIndex["futures_util"] = {"name":"","dirs":[{"name":"future","dirs":[{"name":"future","files":["catch_unwind.rs","flatten.rs","fuse.rs","map.rs","mod.rs","remote_handle.rs","shared.rs"]},{"name":"try_future","files":["into_future.rs","mod.rs","try_flatten.rs","try_flatten_err.rs"]}],"files":["abortable.rs","either.rs","join.rs","join_all.rs","lazy.rs","maybe_done.rs","mod.rs","option.rs","pending.rs","poll_fn.rs","ready.rs","select.rs","select_all.rs","select_ok.rs","try_join.rs","try_join_all.rs","try_maybe_done.rs","try_select.rs"]},{"name":"io","files":["allow_std.rs","buf_reader.rs","buf_writer.rs","chain.rs","close.rs","copy.rs","copy_buf.rs","cursor.rs","empty.rs","fill_buf.rs","flush.rs","into_sink.rs","lines.rs","mod.rs","read.rs","read_exact.rs","read_line.rs","read_to_end.rs","read_to_string.rs","read_until.rs","read_vectored.rs","repeat.rs","seek.rs","sink.rs","split.rs","take.rs","window.rs","write.rs","write_all.rs","write_vectored.rs"]},{"name":"lock","files":["bilock.rs","mod.rs","mutex.rs"]},{"name":"sink","files":["buffer.rs","close.rs","drain.rs","err_into.rs","fanout.rs","flush.rs","map_err.rs","mod.rs","send.rs","send_all.rs","with.rs","with_flat_map.rs"]},{"name":"stream","dirs":[{"name":"futures_unordered","files":["abort.rs","iter.rs","mod.rs","ready_to_run_queue.rs","task.rs"]},{"name":"stream","files":["buffer_unordered.rs","buffered.rs","catch_unwind.rs","chain.rs","chunks.rs","collect.rs","concat.rs","enumerate.rs","filter.rs","filter_map.rs","flatten.rs","fold.rs","for_each.rs","for_each_concurrent.rs","forward.rs","fuse.rs","into_future.rs","map.rs","mod.rs","next.rs","peek.rs","ready_chunks.rs","scan.rs","select_next_some.rs","skip.rs","skip_while.rs","split.rs","take.rs","take_until.rs","take_while.rs","then.rs","zip.rs"]},{"name":"try_stream","files":["and_then.rs","into_async_read.rs","into_stream.rs","mod.rs","or_else.rs","try_buffer_unordered.rs","try_collect.rs","try_concat.rs","try_filter.rs","try_filter_map.rs","try_flatten.rs","try_fold.rs","try_for_each.rs","try_for_each_concurrent.rs","try_next.rs","try_skip_while.rs","try_take_while.rs","try_unfold.rs"]}],"files":["empty.rs","futures_ordered.rs","iter.rs","mod.rs","once.rs","pending.rs","poll_fn.rs","repeat.rs","select.rs","select_all.rs","unfold.rs"]},{"name":"task","files":["mod.rs","spawn.rs"]}],"files":["fns.rs","lib.rs","never.rs"]};
sourcesIndex["fxhash"] = {"name":"","files":["lib.rs"]};
sourcesIndex["gfx_backend_empty"] = {"name":"","files":["buffer.rs","descriptor.rs","image.rs","lib.rs","memory.rs"]};
sourcesIndex["gfx_backend_vulkan"] = {"name":"","files":["command.rs","conv.rs","device.rs","info.rs","lib.rs","native.rs","pool.rs","window.rs"]};
sourcesIndex["gfx_descriptor"] = {"name":"","files":["allocator.rs","counts.rs","lib.rs"]};
sourcesIndex["gfx_hal"] = {"name":"","dirs":[{"name":"command","files":["clear.rs","mod.rs","structs.rs"]},{"name":"pso","files":["compute.rs","descriptor.rs","graphics.rs","input_assembler.rs","mod.rs","output_merger.rs","specialization.rs"]},{"name":"queue","files":["family.rs","mod.rs"]}],"files":["adapter.rs","buffer.rs","device.rs","format.rs","image.rs","lib.rs","memory.rs","pass.rs","pool.rs","query.rs","window.rs"]};
sourcesIndex["gfx_memory"] = {"name":"","dirs":[{"name":"allocator","files":["dedicated.rs","general.rs","linear.rs","mod.rs"]},{"name":"heaps","files":["heap.rs","memory_type.rs","mod.rs"]}],"files":["block.rs","lib.rs","mapping.rs","memory.rs","stats.rs","usage.rs"]};
sourcesIndex["hashbrown"] = {"name":"","dirs":[{"name":"external_trait_impls","files":["mod.rs"]},{"name":"raw","files":["bitmask.rs","mod.rs","sse2.rs"]}],"files":["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]};
sourcesIndex["indexmap"] = {"name":"","dirs":[{"name":"map","dirs":[{"name":"core","files":["raw.rs"]}],"files":["core.rs"]}],"files":["equivalent.rs","lib.rs","macros.rs","map.rs","mutable_keys.rs","set.rs","util.rs"]};
sourcesIndex["inplace_it"] = {"name":"","dirs":[{"name":"guards","files":["mod.rs","slice_memory_guard.rs","uninitialized_slice_memory_guard.rs"]}],"files":["alloc_array.rs","fixed_array.rs","lib.rs"]};
sourcesIndex["instant"] = {"name":"","files":["lib.rs","native.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libloading"] = {"name":"","dirs":[{"name":"os","dirs":[{"name":"unix","files":["consts.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["changelog.rs","error.rs","lib.rs","util.rs"]};
sourcesIndex["lock_api"] = {"name":"","files":["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","lib.rs","naive.rs"]};
sourcesIndex["naga"] = {"name":"","dirs":[{"name":"back","dirs":[{"name":"spv","files":["helpers.rs","instructions.rs","layout.rs","mod.rs","writer.rs"]}],"files":["mod.rs"]},{"name":"front","dirs":[{"name":"spv","files":["convert.rs","error.rs","flow.rs","function.rs","mod.rs"]},{"name":"wgsl","files":["conv.rs","lexer.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"proc","files":["interface.rs","mod.rs","typifier.rs","validator.rs"]}],"files":["arena.rs","lib.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["once_cell"] = {"name":"","files":["imp_std.rs","lib.rs"]};
sourcesIndex["parking_lot"] = {"name":"","files":["condvar.rs","deadlock.rs","elision.rs","fair_mutex.rs","lib.rs","mutex.rs","once.rs","raw_fair_mutex.rs","raw_mutex.rs","raw_rwlock.rs","remutex.rs","rwlock.rs","util.rs"]};
sourcesIndex["parking_lot_core"] = {"name":"","dirs":[{"name":"thread_parker","files":["linux.rs","mod.rs"]}],"files":["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]};
sourcesIndex["petgraph"] = {"name":"","dirs":[{"name":"algo","files":["dominators.rs","mod.rs"]},{"name":"graph_impl","dirs":[{"name":"stable_graph","files":["mod.rs"]}],"files":["frozen.rs","mod.rs"]},{"name":"visit","files":["dfsvisit.rs","filter.rs","macros.rs","mod.rs","reversed.rs","traversal.rs"]}],"files":["astar.rs","csr.rs","data.rs","dijkstra.rs","dot.rs","graphmap.rs","isomorphism.rs","iter_format.rs","iter_utils.rs","lib.rs","macros.rs","matrix_graph.rs","prelude.rs","scored.rs","simple_paths.rs","traits_graph.rs","unionfind.rs","util.rs"]};
sourcesIndex["pin_project"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pin_project_internal"] = {"name":"","dirs":[{"name":"pin_project","files":["attribute.rs","derive.rs","mod.rs"]}],"files":["lib.rs","pinned_drop.rs","project.rs","utils.rs"]};
sourcesIndex["pin_project_lite"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pin_utils"] = {"name":"","files":["lib.rs","projection.rs","stack_pin.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["raw_window_handle"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["ron"] = {"name":"","dirs":[{"name":"de","files":["id.rs","mod.rs","tag.rs","value.rs"]},{"name":"ser","files":["mod.rs","value.rs"]}],"files":["error.rs","extensions.rs","lib.rs","parse.rs","value.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["from_primitive.rs","ignored_any.rs","impls.rs","mod.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","macros.rs","mod.rs","ser.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["export.rs","integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["slab"] = {"name":"","files":["lib.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["spirv_headers"] = {"name":"","files":["autogen_spirv.rs","lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","gen_helper.rs","hash.rs","visit.rs","visit_mut.rs"]}],"files":["attr.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["tracing"] = {"name":"","files":["dispatcher.rs","field.rs","instrument.rs","level_filters.rs","lib.rs","macros.rs","span.rs","stdlib.rs","subscriber.rs"]};
sourcesIndex["tracing_attributes"] = {"name":"","files":["lib.rs"]};
sourcesIndex["tracing_core"] = {"name":"","files":["callsite.rs","dispatcher.rs","event.rs","field.rs","lib.rs","metadata.rs","parent.rs","span.rs","stdlib.rs","subscriber.rs"]};
sourcesIndex["typed_arena"] = {"name":"","files":["lib.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["wgpu"] = {"name":"","dirs":[{"name":"backend","files":["direct.rs","mod.rs","native_gpu_future.rs"]},{"name":"util","files":["belt.rs","mod.rs"]}],"files":["lib.rs","macros.rs"]};
sourcesIndex["wgpu_core"] = {"name":"","dirs":[{"name":"command","files":["allocator.rs","bind.rs","bundle.rs","compute.rs","draw.rs","mod.rs","render.rs","transfer.rs"]},{"name":"device","files":["life.rs","mod.rs","queue.rs","trace.rs"]},{"name":"track","files":["buffer.rs","mod.rs","range.rs","texture.rs"]}],"files":["binding_model.rs","conv.rs","hub.rs","id.rs","instance.rs","lib.rs","macros.rs","pipeline.rs","resource.rs","swap_chain.rs","validation.rs"]};
sourcesIndex["wgpu_types"] = {"name":"","files":["lib.rs"]};
sourcesIndex["x11"] = {"name":"","files":["dpms.rs","glx.rs","internal.rs","keysym.rs","lib.rs","link.rs","xcursor.rs","xf86vmode.rs","xfixes.rs","xft.rs","xinerama.rs","xinput.rs","xinput2.rs","xlib.rs","xlib_xcb.rs","xmd.rs","xmu.rs","xrandr.rs","xrecord.rs","xrender.rs","xss.rs","xt.rs","xtest.rs"]};
createSourceSidebar();
