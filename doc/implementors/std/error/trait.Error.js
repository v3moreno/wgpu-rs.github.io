(function() {var implementors = {};
implementors["aho_corasick"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;T:&nbsp;Any&gt; Error for CapacityError&lt;T&gt;","synthetic":false,"types":[]}];
implementors["ash"] = [{"text":"impl Error for InstanceError","synthetic":false,"types":[]},{"text":"impl Error for LoadingError","synthetic":false,"types":[]},{"text":"impl Error for Result","synthetic":false,"types":[]}];
implementors["base64"] = [{"text":"impl Error for DecodeError","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Error for ParseError","synthetic":false,"types":[]},{"text":"impl Error for RoundingError","synthetic":false,"types":[]}];
implementors["futures_channel"] = [{"text":"impl Error for SendError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for TrySendError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Error for TryRecvError","synthetic":false,"types":[]},{"text":"impl Error for Canceled","synthetic":false,"types":[]}];
implementors["futures_executor"] = [{"text":"impl Error for EnterError","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl Error for SpawnError","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl Error for Aborted","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any, Item&gt; Error for ReuniteError&lt;T, Item&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Any&gt; Error for ReuniteError&lt;T&gt;","synthetic":false,"types":[]}];
implementors["gfx_hal"] = [{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for ViewCreationError","synthetic":false,"types":[]},{"text":"impl Error for DeviceLost","synthetic":false,"types":[]},{"text":"impl Error for SurfaceLost","synthetic":false,"types":[]},{"text":"impl Error for WindowInUse","synthetic":false,"types":[]},{"text":"impl Error for OutOfMemory","synthetic":false,"types":[]},{"text":"impl Error for OomOrDeviceLost","synthetic":false,"types":[]},{"text":"impl Error for AllocationError","synthetic":false,"types":[]},{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for MapError","synthetic":false,"types":[]},{"text":"impl Error for BindError","synthetic":false,"types":[]},{"text":"impl Error for ShaderError","synthetic":false,"types":[]},{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for ViewCreationError","synthetic":false,"types":[]},{"text":"impl Error for AllocationError","synthetic":false,"types":[]},{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for CreationError","synthetic":false,"types":[]},{"text":"impl Error for AcquireError","synthetic":false,"types":[]},{"text":"impl Error for PresentError","synthetic":false,"types":[]},{"text":"impl Error for InitError","synthetic":false,"types":[]}];
implementors["gfx_memory"] = [{"text":"impl Error for HeapsError","synthetic":false,"types":[]}];
implementors["libloading"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Error for SetLoggerError","synthetic":false,"types":[]},{"text":"impl Error for ParseLevelError","synthetic":false,"types":[]}];
implementors["naga"] = [{"text":"impl Error for ResolveError","synthetic":false,"types":[]},{"text":"impl Error for ValidationError","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["regex_automata"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for CaseFoldError","synthetic":false,"types":[]},{"text":"impl Error for UnicodeWordError","synthetic":false,"types":[]}];
implementors["ron"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Error for OutOfRangeError","synthetic":false,"types":[]},{"text":"impl Error for ParseError","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl Error for SetGlobalDefaultError","synthetic":false,"types":[]},{"text":"impl Error for ParseLevelError","synthetic":false,"types":[]}];
implementors["tracing_subscriber"] = [{"text":"impl Error for ParseError","synthetic":false,"types":[]},{"text":"impl Error for BadName","synthetic":false,"types":[]},{"text":"impl Error for FromEnvError","synthetic":false,"types":[]},{"text":"impl Error for ParseError","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for TryInitError","synthetic":false,"types":[]}];
implementors["wgpu"] = [{"text":"impl Error for SwapChainError","synthetic":false,"types":[]},{"text":"impl Error for RequestDeviceError","synthetic":false,"types":[]},{"text":"impl Error for BufferAsyncError","synthetic":false,"types":[]}];
implementors["wgpu_core"] = [{"text":"impl Error for CreateBindGroupLayoutError","synthetic":false,"types":[]},{"text":"impl Error for CreateBindGroupError","synthetic":false,"types":[]},{"text":"impl Error for BindingTypeMaxCountError","synthetic":false,"types":[]},{"text":"impl Error for CreatePipelineLayoutError","synthetic":false,"types":[]},{"text":"impl Error for PushConstantUploadError","synthetic":false,"types":[]},{"text":"impl Error for BindError","synthetic":false,"types":[]},{"text":"impl Error for CommandAllocatorError","synthetic":false,"types":[]},{"text":"impl Error for CreateRenderBundleError","synthetic":false,"types":[]},{"text":"impl Error for RenderCommandError","synthetic":false,"types":[]},{"text":"impl Error for ComputePassError","synthetic":false,"types":[]},{"text":"impl Error for DrawError","synthetic":false,"types":[]},{"text":"impl Error for RenderPassError","synthetic":false,"types":[]},{"text":"impl Error for TransferError","synthetic":false,"types":[]},{"text":"impl Error for CommandEncoderFinishError","synthetic":false,"types":[]},{"text":"impl Error for CreateDeviceError","synthetic":false,"types":[]},{"text":"impl Error for CreateBufferError","synthetic":false,"types":[]},{"text":"impl Error for CreateTextureError","synthetic":false,"types":[]},{"text":"impl Error for BufferAccessError","synthetic":false,"types":[]},{"text":"impl Error for CreateSamplerError","synthetic":false,"types":[]},{"text":"impl Error for CreateShaderModuleError","synthetic":false,"types":[]},{"text":"impl Error for CreateSwapChainError","synthetic":false,"types":[]},{"text":"impl Error for CreateTextureViewError","synthetic":false,"types":[]},{"text":"impl Error for TextureViewDestroyError","synthetic":false,"types":[]},{"text":"impl Error for RequestDeviceError","synthetic":false,"types":[]},{"text":"impl Error for ComputePipelineError","synthetic":false,"types":[]},{"text":"impl Error for RenderPipelineError","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for SwapChainError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()