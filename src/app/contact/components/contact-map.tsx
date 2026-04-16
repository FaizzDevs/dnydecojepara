'use client'

import { motion } from "motion/react"
import { GoogleMap, LoadScript, Marker, InfoWindow, OverlayView } from '@react-google-maps/api'
import { useCallback, useRef, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/Components/ui/button"

const mapContainerStyle = {
    width: '100%',
    height: '100%'
}

const center = {
    lat: -6.6273316,
    lng: 110.6973322
}

const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    styles: [
        {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#7b3f24' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e7' }]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#faf9f7' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#e3e2e0' }]
        },
    ],   
}

const showroomLocation = {
    lat: -6.6273316,
    lng: 110.6973322,
    name: 'Dny Deco Furniture',
    address: 'Jl, Slamet Riyadi No. 123, Langon',
    phone: '+62 987654321',
    email: 'dnydecofurniture@example.com'
}

export function ContactMap() {
    const [isOpen, setIsOpen] = useState(false)
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const markerRef = useRef<google.maps.Marker | null>(null)
    const [isHover, setIsHover] = useState(false)

    const onLoad = useCallback(() => {
        setMap(null)
    }, [])

    const onUnmount = useCallback(() => {
        setMap(null)
    }, [])

    const handleMarkerClick = () => {
        setIsOpen(true)
    }

    const handleInfoWindowClose = () => {
        setIsOpen(false)
    }
    
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
            libraries={['places']}
            loadingElement={ <div className="h-full w-full bg-surface-container-low animate-pulse rounded-xl" /> }
        >
            <motion.section
                className="px-6 md:px-12 pb-24"
            >
                <div className="relative rounded-xl overflow-hidden h-150 shadow-2xl">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={15}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={mapOptions}
                    >
                        <Marker 
                            position={showroomLocation}
                            onClick={handleMarkerClick}
                            onMouseOver={() => setIsHover(true)}
                            onMouseOut={() => setIsHover(false)}
                            icon={
                                typeof window !== "undefined" && window.google
                                    ? {
                                        path: google.maps.SymbolPath.CIRCLE,
                                        scale: 10,
                                        fillColor: '#7b3f24',
                                        fillOpacity: 1,
                                        strokeColor: '#ffffff',
                                        strokeWeight: 3
                                    }
                                    : undefined
                            }
                        />

                        {isOpen && (
                            <InfoWindow
                                position={showroomLocation}
                                onCloseClick={handleInfoWindowClose}
                                options={
                                    typeof window !== 'undefined' && window.google
                                    ? {
                                        pixelOffset: new window.google.maps.Size(0, -30)
                                    }
                                    : undefined
                                }
                            >
                                <div className="p-2 max-w-xs">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-headline text-lg text-primary">
                                            {showroomLocation.name}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-2">
                                        {showroomLocation.address}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {showroomLocation.phone}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {showroomLocation.email}
                                    </p>
                                    <Button
                                        size='sm'
                                        className="w-full bg-primary text-white hover:bg-primary/90 rounded-full text-xs"
                                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${showroomLocation.lat},${showroomLocation.lng}`, '_blank')}
                                    >
                                        Get Directions
                                    </Button>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>

                    {isHover && (
                        <OverlayView
                            position={showroomLocation}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        >
                            <div className="relative -translate-x-1/2 -translate-y-full mb-2">
                                <div className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl cursor-pointer hover:bg-primary/90 transition-colors">
                                    Dny Deco Furniture
                                </div>
                            </div>
                        </OverlayView>
                    )}
                </div>
            </motion.section>
        </LoadScript>
    )
}